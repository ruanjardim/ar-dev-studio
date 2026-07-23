type TowerIndex = 0 | 1 | 2;

type Move = {
  from: TowerIndex;
  to: TowerIndex;
  disk: number;
};

type DragState = {
  fromTower: TowerIndex;
  disk: number;
  sourceElement: HTMLElement;
  ghostElement: HTMLElement;
};

type CompletedResult = {
  diskCount: number;
  elapsedSeconds: number;
  moves: number;
  minimumMoves: number;
  efficiency: number;
};

type HanoiElements = {
  board: HTMLElement;
  diskCountSelect: HTMLSelectElement;
  time: HTMLElement;
  moveCount: HTMLElement;
  minimumMoves: HTMLElement;
  status: HTMLElement;
  undoButton: HTMLButtonElement;
  restartButton: HTMLButtonElement;
  towerButtons: HTMLButtonElement[];
  diskContainers: HTMLElement[];

  demonstration: HTMLElement;
  demonstrationTitle: HTMLElement;
  demonstrationDescription: HTMLElement;
  stopDemonstrationButton: HTMLButtonElement;

  completionModal: HTMLElement;
  modalBackdrop: HTMLElement;
  resultTime: HTMLElement;
  resultMoves: HTMLElement;
  resultMinimum: HTMLElement;
  resultEfficiency: HTMLElement;
  achievementIcon: HTMLElement;
  achievementTitle: HTMLElement;
  achievementDescription: HTMLElement;
  replayButton: HTMLButtonElement;
  nextLevelButton: HTMLButtonElement;
  optimalSolutionButton: HTMLButtonElement;
  closeModalButton: HTMLButtonElement;
};

const DEFAULT_DISK_COUNT = 3;
const MINIMUM_DISK_COUNT = 3;
const MAXIMUM_DISK_COUNT = 8;
const DEMONSTRATION_DELAY = 700;

function getMinimumMoves(diskCount: number): number {
  return 2 ** diskCount - 1;
}

function isTowerIndex(value: number): value is TowerIndex {
  return value === 0 || value === 1 || value === 2;
}

function formatTime(totalSeconds: number): string {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds));

  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = safeSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}:${formattedMinutes}:${formattedSeconds}`;
  }

  return `${formattedMinutes}:${formattedSeconds}`;
}

function getElements(): HanoiElements | null {
  const board = document.querySelector<HTMLElement>("#hanoi-board");

  const diskCountSelect =
    document.querySelector<HTMLSelectElement>("#hanoi-disk-count");

  const time =
    document.querySelector<HTMLElement>("#hanoi-time");

  const moveCount =
    document.querySelector<HTMLElement>("#hanoi-move-count");

  const minimumMoves =
    document.querySelector<HTMLElement>("#hanoi-minimum-moves");

  const status =
    document.querySelector<HTMLElement>("#hanoi-status");

  const undoButton =
    document.querySelector<HTMLButtonElement>("#hanoi-undo-button");

  const restartButton =
    document.querySelector<HTMLButtonElement>("#hanoi-restart-button");

  const towerButtons = Array.from(
    document.querySelectorAll<HTMLButtonElement>("[data-hanoi-tower]"),
  );

  const diskContainers = Array.from(
    document.querySelectorAll<HTMLElement>("[data-hanoi-disks]"),
  );

  const demonstration =
    document.querySelector<HTMLElement>("#hanoi-demonstration");

  const demonstrationTitle =
    document.querySelector<HTMLElement>(
      "#hanoi-demonstration-title",
    );

  const demonstrationDescription =
    document.querySelector<HTMLElement>(
      "#hanoi-demonstration-description",
    );

  const stopDemonstrationButton =
    document.querySelector<HTMLButtonElement>(
      "#hanoi-stop-demonstration",
    );

  const completionModal =
    document.querySelector<HTMLElement>(
      "#hanoi-completion-modal",
    );

  const modalBackdrop =
    document.querySelector<HTMLElement>(
      "[data-hanoi-close-modal]",
    );

  const resultTime =
    document.querySelector<HTMLElement>("#hanoi-result-time");

  const resultMoves =
    document.querySelector<HTMLElement>("#hanoi-result-moves");

  const resultMinimum =
    document.querySelector<HTMLElement>(
      "#hanoi-result-minimum",
    );

  const resultEfficiency =
    document.querySelector<HTMLElement>(
      "#hanoi-result-efficiency",
    );

  const achievementIcon =
    document.querySelector<HTMLElement>(
      "#hanoi-achievement-icon",
    );

  const achievementTitle =
    document.querySelector<HTMLElement>(
      "#hanoi-achievement-title",
    );

  const achievementDescription =
    document.querySelector<HTMLElement>(
      "#hanoi-achievement-description",
    );

  const replayButton =
    document.querySelector<HTMLButtonElement>(
      "#hanoi-replay-button",
    );

  const nextLevelButton =
    document.querySelector<HTMLButtonElement>(
      "#hanoi-next-level-button",
    );

  const optimalSolutionButton =
    document.querySelector<HTMLButtonElement>(
      "#hanoi-optimal-solution-button",
    );

  const closeModalButton =
    document.querySelector<HTMLButtonElement>(
      "#hanoi-close-modal-button",
    );

  if (
    !board ||
    !diskCountSelect ||
    !time ||
    !moveCount ||
    !minimumMoves ||
    !status ||
    !undoButton ||
    !restartButton ||
    towerButtons.length !== 3 ||
    diskContainers.length !== 3 ||
    !demonstration ||
    !demonstrationTitle ||
    !demonstrationDescription ||
    !stopDemonstrationButton ||
    !completionModal ||
    !modalBackdrop ||
    !resultTime ||
    !resultMoves ||
    !resultMinimum ||
    !resultEfficiency ||
    !achievementIcon ||
    !achievementTitle ||
    !achievementDescription ||
    !replayButton ||
    !nextLevelButton ||
    !optimalSolutionButton ||
    !closeModalButton
  ) {
    return null;
  }

  return {
    board,
    diskCountSelect,
    time,
    moveCount,
    minimumMoves,
    status,
    undoButton,
    restartButton,
    towerButtons,
    diskContainers,
    demonstration,
    demonstrationTitle,
    demonstrationDescription,
    stopDemonstrationButton,
    completionModal,
    modalBackdrop,
    resultTime,
    resultMoves,
    resultMinimum,
    resultEfficiency,
    achievementIcon,
    achievementTitle,
    achievementDescription,
    replayButton,
    nextLevelButton,
    optimalSolutionButton,
    closeModalButton,
  };
}

export function setupHanoiGame(): void {
  const queriedElements = getElements();

  if (!queriedElements) {
    return;
  }

  const elements: HanoiElements = queriedElements;

  let diskCount = DEFAULT_DISK_COUNT;
  let towers: number[][] = [[], [], []];
  let moveHistory: Move[] = [];
  let moveTotal = 0;
  let gameCompleted = false;
  let dragState: DragState | null = null;
  let selectedTower: TowerIndex | null = null;
  let suppressNextTowerClick = false;

  let timerId: number | null = null;
  let timerStartedAt = 0;
  let elapsedSeconds = 0;
  let timerRunning = false;

  let isDemonstrating = false;
  let demonstrationRunId = 0;

  let lastCompletedResult: CompletedResult | null = null;

  function setStatus(message: string): void {
    elements.status.textContent = message;
  }

  function updateTimerDisplay(): void {
    elements.time.textContent = formatTime(elapsedSeconds);
  }

  function refreshElapsedTime(): void {
    if (!timerRunning) {
      return;
    }

    elapsedSeconds = Math.floor(
      (Date.now() - timerStartedAt) / 1000,
    );

    updateTimerDisplay();
  }

  function startTimer(): void {
    if (
      timerRunning ||
      gameCompleted ||
      isDemonstrating
    ) {
      return;
    }

    timerRunning = true;
    timerStartedAt = Date.now() - elapsedSeconds * 1000;

    refreshElapsedTime();

    timerId = window.setInterval(
      refreshElapsedTime,
      250,
    );
  }

  function stopTimer(): void {
    if (timerRunning) {
      refreshElapsedTime();
    }

    timerRunning = false;

    if (timerId !== null) {
      window.clearInterval(timerId);
      timerId = null;
    }
  }

  function resetTimer(): void {
    stopTimer();

    timerStartedAt = 0;
    elapsedSeconds = 0;

    updateTimerDisplay();
  }

  function renderDisks(): void {
    elements.diskContainers.forEach(
      (container, towerIndex) => {
        container.innerHTML = "";

        towers[towerIndex].forEach((disk) => {
          const diskElement =
            document.createElement("span");

          const widthPercentage =
            30 +
            ((disk - 1) /
              Math.max(diskCount - 1, 1)) *
              62;

          diskElement.className = "hanoi-disk";
          diskElement.dataset.diskSize = String(disk);
          diskElement.dataset.towerIndex =
            String(towerIndex);

          diskElement.style.width =
            `${widthPercentage}%`;

          diskElement.setAttribute(
            "aria-label",
            `Disco ${disk} de ${diskCount}`,
          );

          const isTopDisk =
            towers[towerIndex].at(-1) === disk;

          diskElement.classList.toggle(
            "is-draggable",
            isTopDisk &&
              !gameCompleted &&
              !isDemonstrating,
          );

          container.append(diskElement);
        });
      },
    );
  }

  function updateTowerSelection(): void {
    elements.towerButtons.forEach((tower, index) => {
      const isSelected = selectedTower === index;

      tower.classList.toggle(
        "is-selected",
        isSelected,
      );

      tower.setAttribute(
        "aria-pressed",
        String(isSelected),
      );
    });
  }

  function updateInterface(): void {
    elements.moveCount.textContent =
      String(moveTotal);

    elements.minimumMoves.textContent =
      String(getMinimumMoves(diskCount));

    elements.undoButton.disabled =
      moveHistory.length === 0 ||
      gameCompleted ||
      isDemonstrating;

    elements.diskCountSelect.disabled =
      isDemonstrating;

    updateTowerSelection();
    renderDisks();
  }

  function resetTowerHighlights(): void {
    elements.towerButtons.forEach((tower) => {
      tower.classList.remove(
        "is-drop-target",
        "is-drop-invalid",
      );
    });
  }

  function removeDragListeners(): void {
    window.removeEventListener(
      "pointermove",
      handlePointerMove,
    );

    window.removeEventListener(
      "pointerup",
      handlePointerUp,
    );

    window.removeEventListener(
      "pointercancel",
      handlePointerUp,
    );
  }

  function cancelDragging(): void {
    if (dragState) {
      dragState.sourceElement.classList.remove(
        "is-drag-source",
      );

      dragState.ghostElement.remove();
      dragState = null;
    }

    resetTowerHighlights();
    removeDragListeners();
  }

  function closeCompletionModal(): void {
    elements.completionModal.hidden = true;
    document.body.classList.remove(
      "hanoi-modal-open",
    );
  }

  function openCompletionModal(
    result: CompletedResult,
  ): void {
    elements.resultTime.textContent =
      formatTime(result.elapsedSeconds);

    elements.resultMoves.textContent =
      String(result.moves);

    elements.resultMinimum.textContent =
      String(result.minimumMoves);

    elements.resultEfficiency.textContent =
      `${result.efficiency}%`;

    if (result.moves === result.minimumMoves) {
      elements.achievementIcon.textContent = "🥇";

      elements.achievementTitle.textContent =
        "Solução ótima";

      elements.achievementDescription.textContent =
        "Você encontrou o menor número possível de movimentos.";
    } else if (result.efficiency >= 75) {
      elements.achievementIcon.textContent = "🥈";

      elements.achievementTitle.textContent =
        "Excelente estratégia";

      elements.achievementDescription.textContent =
        `Você ficou muito próximo da solução ótima de ${result.minimumMoves} movimentos.`;
    } else {
      elements.achievementIcon.textContent = "🧠";

      elements.achievementTitle.textContent =
        "Desafio concluído";

      elements.achievementDescription.textContent =
        `Tente novamente para se aproximar dos ${result.minimumMoves} movimentos mínimos.`;
    }

    if (result.diskCount < MAXIMUM_DISK_COUNT) {
      elements.nextLevelButton.disabled = false;

      elements.nextLevelButton.textContent =
        `Próximo desafio → ${result.diskCount + 1} discos`;
    } else {
      elements.nextLevelButton.disabled = true;

      elements.nextLevelButton.textContent =
        "Nível máximo concluído";
    }

    elements.completionModal.hidden = false;

    document.body.classList.add(
      "hanoi-modal-open",
    );

    window.requestAnimationFrame(() => {
      elements.nextLevelButton.focus();
    });
  }

  function stopDemonstration(
    shouldResetGame: boolean,
  ): void {
    demonstrationRunId += 1;
    isDemonstrating = false;

    elements.demonstration.hidden = true;
    elements.diskCountSelect.disabled = false;

    if (shouldResetGame) {
      resetGame(diskCount);
    } else {
      updateInterface();
    }
  }

  function resetGame(
    nextDiskCount = diskCount,
  ): void {
    cancelDragging();
    stopTimer();

    demonstrationRunId += 1;
    isDemonstrating = false;

    diskCount = Math.min(
      MAXIMUM_DISK_COUNT,
      Math.max(
        MINIMUM_DISK_COUNT,
        nextDiskCount,
      ),
    );

    towers = [
      Array.from(
        { length: diskCount },
        (_, index) => diskCount - index,
      ),
      [],
      [],
    ];

    moveHistory = [];
    moveTotal = 0;
    gameCompleted = false;
    selectedTower = null;

    elements.diskCountSelect.value =
      String(diskCount);

    elements.diskCountSelect.disabled = false;
    elements.demonstration.hidden = true;

    closeCompletionModal();
    resetTowerHighlights();
    resetTimer();

    setStatus(
      "Arraste o disco superior para outra torre.",
    );

    updateInterface();
  }

  function getTopDisk(
    towerIndex: TowerIndex,
  ): number | undefined {
    return towers[towerIndex].at(-1);
  }

  function canMoveDisk(
    fromTower: TowerIndex,
    toTower: TowerIndex,
  ): boolean {
    const movingDisk = getTopDisk(fromTower);
    const destinationDisk =
      getTopDisk(toTower);

    if (movingDisk === undefined) {
      return false;
    }

    if (destinationDisk === undefined) {
      return true;
    }

    return movingDisk < destinationDisk;
  }

  function selectTower(
    towerIndex: TowerIndex,
  ): void {
    const topDisk = getTopDisk(towerIndex);

    if (topDisk === undefined) {
      selectedTower = null;

      setStatus(
        "Escolha uma torre que tenha discos disponíveis.",
      );

      updateInterface();
      return;
    }

    selectedTower = towerIndex;

    setStatus(
      `Disco ${topDisk} selecionado. Escolha a torre de destino.`,
    );

    updateInterface();
  }

  function handleTowerClick(
    event: MouseEvent,
  ): void {
    if (suppressNextTowerClick) {
      suppressNextTowerClick = false;
      return;
    }

    if (
      gameCompleted ||
      isDemonstrating ||
      dragState
    ) {
      return;
    }

    const target = event.currentTarget;

    if (!(target instanceof HTMLButtonElement)) {
      return;
    }

    const towerIndex = Number(
      target.dataset.hanoiTower,
    );

    if (!isTowerIndex(towerIndex)) {
      return;
    }

    if (selectedTower === null) {
      selectTower(towerIndex);
      return;
    }

    if (selectedTower === towerIndex) {
      selectedTower = null;

      setStatus("Seleção cancelada.");
      updateInterface();
      return;
    }

    const originTower = selectedTower;
    const moved = moveDisk(originTower, towerIndex);

    if (moved) {
      selectedTower = null;
      updateInterface();
    }
  }

  function checkVictory(): void {
    if (
      towers[2].length !== diskCount ||
      isDemonstrating
    ) {
      return;
    }

    gameCompleted = true;
    stopTimer();

    const minimumMoves =
      getMinimumMoves(diskCount);

    const efficiency =
      moveTotal > 0
        ? Math.min(
            100,
            Math.round(
              (minimumMoves / moveTotal) * 100,
            ),
          )
        : 0;

    lastCompletedResult = {
      diskCount,
      elapsedSeconds,
      moves: moveTotal,
      minimumMoves,
      efficiency,
    };

    if (moveTotal === minimumMoves) {
      setStatus(
        `Vitória perfeita! Você concluiu em ${moveTotal} movimentos.`,
      );
    } else {
      setStatus(
        `Parabéns! Você concluiu em ${moveTotal} movimentos. O mínimo teórico é ${minimumMoves}.`,
      );
    }

    updateInterface();
    openCompletionModal(lastCompletedResult);
  }

  function moveDisk(
    fromTower: TowerIndex,
    toTower: TowerIndex,
  ): boolean {
    if (
      gameCompleted ||
      isDemonstrating
    ) {
      return false;
    }

    if (fromTower === toTower) {
      setStatus(
        "O disco voltou para a torre de origem.",
      );

      return false;
    }

    if (!canMoveDisk(fromTower, toTower)) {
      setStatus(
        "Movimento inválido: um disco maior não pode ficar sobre um menor.",
      );

      return false;
    }

    const disk = towers[fromTower].pop();

    if (disk === undefined) {
      return false;
    }

    startTimer();

    towers[toTower].push(disk);

    moveHistory.push({
      from: fromTower,
      to: toTower,
      disk,
    });

    moveTotal += 1;

    setStatus(
      `Disco movido da torre ${fromTower + 1} para a torre ${toTower + 1}.`,
    );

    updateInterface();
    checkVictory();

    return true;
  }

  function createDragGhost(
    diskElement: HTMLElement,
  ): HTMLElement {
    const rectangle =
      diskElement.getBoundingClientRect();

    const ghost =
      diskElement.cloneNode(true) as HTMLElement;

    ghost.classList.add(
      "hanoi-disk--dragging",
    );

    ghost.classList.remove("is-draggable");

    ghost.style.width = `${rectangle.width}px`;
    ghost.style.height = `${rectangle.height}px`;

    document.body.append(ghost);

    return ghost;
  }

  function positionDragGhost(
    ghost: HTMLElement,
    clientX: number,
    clientY: number,
  ): void {
    const rectangle =
      ghost.getBoundingClientRect();

    ghost.style.left =
      `${clientX - rectangle.width / 2}px`;

    ghost.style.top =
      `${clientY - rectangle.height / 2}px`;
  }

  function getTowerAtPoint(
    clientX: number,
    clientY: number,
  ): TowerIndex | null {
    const element =
      document.elementFromPoint(
        clientX,
        clientY,
      );

    const tower =
      element?.closest<HTMLElement>(
        "[data-hanoi-tower]",
      );

    if (!tower) {
      return null;
    }

    const towerIndex =
      Number(tower.dataset.hanoiTower);

    return isTowerIndex(towerIndex)
      ? towerIndex
      : null;
  }

  function highlightDestination(
    clientX: number,
    clientY: number,
  ): void {
    resetTowerHighlights();

    if (!dragState) {
      return;
    }

    const destinationTower =
      getTowerAtPoint(clientX, clientY);

    if (destinationTower === null) {
      return;
    }

    const towerElement =
      elements.towerButtons[
        destinationTower
      ];

    const isValid =
      destinationTower ===
        dragState.fromTower ||
      canMoveDisk(
        dragState.fromTower,
        destinationTower,
      );

    towerElement.classList.add(
      isValid
        ? "is-drop-target"
        : "is-drop-invalid",
    );
  }

  function finishDragging(
    clientX: number,
    clientY: number,
  ): void {
    if (!dragState) {
      return;
    }

    const destinationTower =
      getTowerAtPoint(clientX, clientY);

    const originTower =
      dragState.fromTower;

    dragState.sourceElement.classList.remove(
      "is-drag-source",
    );

    dragState.ghostElement.remove();
    dragState = null;
    suppressNextTowerClick = true;

    window.setTimeout(() => {
      suppressNextTowerClick = false;
    }, 120);

    resetTowerHighlights();

    if (destinationTower === null) {
      setStatus(
        "Solte o disco sobre uma das três torres.",
      );

      return;
    }

    moveDisk(originTower, destinationTower);
  }

  function handlePointerMove(
    event: PointerEvent,
  ): void {
    if (!dragState) {
      return;
    }

    positionDragGhost(
      dragState.ghostElement,
      event.clientX,
      event.clientY,
    );

    highlightDestination(
      event.clientX,
      event.clientY,
    );
  }

  function handlePointerUp(
    event: PointerEvent,
  ): void {
    if (!dragState) {
      return;
    }

    finishDragging(
      event.clientX,
      event.clientY,
    );

    removeDragListeners();
  }

  function handleDiskPointerDown(
    event: PointerEvent,
  ): void {
    if (
      gameCompleted ||
      isDemonstrating ||
      event.button !== 0
    ) {
      return;
    }

    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const diskElement =
      target.closest<HTMLElement>(
        ".hanoi-disk",
      );

    if (!diskElement) {
      return;
    }

    const towerValue = Number(
      diskElement.dataset.towerIndex,
    );

    const diskValue = Number(
      diskElement.dataset.diskSize,
    );

    if (!isTowerIndex(towerValue)) {
      return;
    }

    const topDisk =
      getTopDisk(towerValue);

    if (topDisk !== diskValue) {
      setStatus(
        "Somente o disco superior pode ser movimentado.",
      );

      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const ghostElement =
      createDragGhost(diskElement);

    selectedTower = null;
    updateTowerSelection();

    dragState = {
      fromTower: towerValue,
      disk: diskValue,
      sourceElement: diskElement,
      ghostElement,
    };

    diskElement.classList.add(
      "is-drag-source",
    );

    positionDragGhost(
      ghostElement,
      event.clientX,
      event.clientY,
    );

    setStatus(
      "Arraste o disco e solte sobre a torre desejada.",
    );

    window.addEventListener(
      "pointermove",
      handlePointerMove,
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp,
    );

    window.addEventListener(
      "pointercancel",
      handlePointerUp,
    );
  }

  function undoLastMove(): void {
    const lastMove = moveHistory.pop();

    if (
      !lastMove ||
      gameCompleted ||
      isDemonstrating
    ) {
      return;
    }

    const disk =
      towers[lastMove.to].pop();

    if (disk === undefined) {
      return;
    }

    towers[lastMove.from].push(disk);

    moveTotal = Math.max(
      0,
      moveTotal - 1,
    );

    selectedTower = null;

    setStatus(
      "Último movimento desfeito.",
    );

    updateInterface();
  }

  function createOptimalMoves(
    amount: number,
    from: TowerIndex,
    auxiliary: TowerIndex,
    to: TowerIndex,
    moves: Move[],
  ): void {
    if (amount === 1) {
      moves.push({
        from,
        to,
        disk: 1,
      });

      return;
    }

    createOptimalMoves(
      amount - 1,
      from,
      to,
      auxiliary,
      moves,
    );

    moves.push({
      from,
      to,
      disk: amount,
    });

    createOptimalMoves(
      amount - 1,
      auxiliary,
      from,
      to,
      moves,
    );
  }

  function wait(
    milliseconds: number,
  ): Promise<void> {
    return new Promise((resolve) => {
      window.setTimeout(resolve, milliseconds);
    });
  }

  async function runOptimalDemonstration(): Promise<void> {
    const result = lastCompletedResult;

    if (!result) {
      return;
    }

    closeCompletionModal();
    cancelDragging();
    stopTimer();

    demonstrationRunId += 1;
    const currentRunId = demonstrationRunId;

    diskCount = result.diskCount;

    towers = [
      Array.from(
        { length: diskCount },
        (_, index) => diskCount - index,
      ),
      [],
      [],
    ];

    moveHistory = [];
    moveTotal = 0;
    gameCompleted = false;
    isDemonstrating = true;

    resetTimer();

    elements.diskCountSelect.value =
      String(diskCount);

    elements.diskCountSelect.disabled = true;

    elements.demonstration.hidden = false;

    elements.demonstrationTitle.textContent =
      "Modo demonstração ativo";

    elements.demonstrationDescription.textContent =
      "Observe como o algoritmo recursivo resolve o problema com o menor número possível de movimentos.";

    setStatus(
      "Preparando a solução ótima...",
    );

    updateInterface();

    const optimalMoves: Move[] = [];

    createOptimalMoves(
      diskCount,
      0,
      1,
      2,
      optimalMoves,
    );

    await wait(700);

    for (
      let index = 0;
      index < optimalMoves.length;
      index += 1
    ) {
      if (
        currentRunId !== demonstrationRunId ||
        !isDemonstrating
      ) {
        return;
      }

      const move = optimalMoves[index];
      const disk =
        towers[move.from].pop();

      if (disk === undefined) {
        stopDemonstration(true);
        return;
      }

      towers[move.to].push(disk);
      moveTotal = index + 1;

      elements.demonstrationDescription.textContent =
        `Movimento ${index + 1} de ${optimalMoves.length}: disco ${disk}, torre ${move.from + 1} → torre ${move.to + 1}.`;

      setStatus(
        `Solução ótima: movendo o disco ${disk} da torre ${move.from + 1} para a torre ${move.to + 1}.`,
      );

      updateInterface();

      await wait(DEMONSTRATION_DELAY);
    }

    if (
      currentRunId !== demonstrationRunId
    ) {
      return;
    }

    isDemonstrating = false;
    gameCompleted = true;

    elements.diskCountSelect.disabled = false;

    elements.demonstrationTitle.textContent =
      "Demonstração concluída";

    elements.demonstrationDescription.textContent =
      `O algoritmo resolveu o nível com exatamente ${optimalMoves.length} movimentos, o mínimo teórico possível.`;

    setStatus(
      `Solução ótima concluída em ${optimalMoves.length} movimentos.`,
    );

    updateInterface();
  }

  elements.board.addEventListener(
    "pointerdown",
    handleDiskPointerDown,
  );

  elements.towerButtons.forEach((towerButton) => {
    towerButton.addEventListener(
      "click",
      handleTowerClick,
    );
  });

  elements.diskCountSelect.addEventListener(
    "change",
    () => {
      const nextDiskCount = Number(
        elements.diskCountSelect.value,
      );

      resetGame(nextDiskCount);
    },
  );

  elements.restartButton.addEventListener(
    "click",
    () => {
      resetGame();
    },
  );

  elements.undoButton.addEventListener(
    "click",
    () => {
      undoLastMove();
    },
  );

  elements.replayButton.addEventListener(
    "click",
    () => {
      const replayDiskCount =
        lastCompletedResult?.diskCount ??
        diskCount;

      resetGame(replayDiskCount);
    },
  );

  elements.nextLevelButton.addEventListener(
    "click",
    () => {
      const completedDiskCount =
        lastCompletedResult?.diskCount ??
        diskCount;

      if (
        completedDiskCount >=
        MAXIMUM_DISK_COUNT
      ) {
        return;
      }

      resetGame(
        completedDiskCount + 1,
      );
    },
  );

  elements.optimalSolutionButton.addEventListener(
    "click",
    () => {
      void runOptimalDemonstration();
    },
  );

  elements.stopDemonstrationButton.addEventListener(
    "click",
    () => {
      stopDemonstration(true);
    },
  );

  elements.closeModalButton.addEventListener(
    "click",
    () => {
      closeCompletionModal();
      elements.restartButton.focus();
    },
  );

  elements.modalBackdrop.addEventListener(
    "click",
    () => {
      closeCompletionModal();
      elements.restartButton.focus();
    },
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "Escape" &&
        !elements.completionModal.hidden
      ) {
        closeCompletionModal();
        elements.restartButton.focus();
      }
    },
  );

  resetGame();
}

