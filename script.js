const track = document.getElementById("roulette-track");
const viewport = document.querySelector(".roulette-viewport");
const spinButton = document.getElementById("spin-button");
const spinAgainButton = document.getElementById("spin-again-button");
const closeResultButton = document.getElementById("close-result-button");
const resultOverlay = document.getElementById("result-overlay");
const resultCard = document.getElementById("result-card");
const resultImage = document.getElementById("result-image");
const resultName = document.getElementById("result-name");
const resultRarity = document.getElementById("result-rarity");
const statusText = document.getElementById("status-text");

const itemPool = dedupeItems([
  { file: "images/BUD-bottle05-without-drops.jpg", rarity: "rare", name: "Bud" },
  { file: "images/bad_styzka_241025_t.jpg", rarity: "rare", name: "Bud" },
  { file: "images/baltika_3_export_110226_t.jpg", rarity: "common", name: "Baltika 3" },
  { file: "images/baltika_9_legendarnoe_071124_t.jpg", rarity: "legendary", name: "Baltika 9" },
  { file: "images/bavtika9_1_2_071124_t.jpg", rarity: "legendary", name: "Baltika 9" },
  { file: "images/bm_pet_100724_t.jpg", rarity: "common", name: "Medved" },
  { file: "images/kozel_svetly_bottle_alco_260521_t.jpg", rarity: "common", name: "Kozel Svetly" },
  { file: "images/kozel_cerny_bottle_new_design_260521_t.jpg", rarity: "rare", name: "Kozel Cerny" },
  { file: "images/kozel_svetly_metbanka_2605121_t.jpg", rarity: "common", name: "Kozel Svetly" },
  { file: "images/kozel_temnie_24102022.jpg", rarity: "rare", name: "Kozel Cerny" },
  { file: "images/hoegaarden_15122021.jpg", rarity: "rare", name: "Hoegaarden" },
  { file: "images/spaten_st_07062022.jpg", rarity: "epic", name: "Spaten" },
  { file: "images/peroni_180925_t.jpg", rarity: "rare", name: "Peroni Nastro Azzurro" },
  { file: "images/stella_artua_steklo_081019.jpg", rarity: "rare", name: "Stella Artois" },
  { file: "images/stella_styzka_241025_t.jpg", rarity: "rare", name: "Stella Artois" },
  { file: "images/corona_ex_cer_261224_t.jpg", rarity: "epic", name: "Corona Extra" },
  { file: "images/paulaner_hefeweissbier_05052025_t.jpg", rarity: "legendary", name: "Paulaner Hefe-Weissbier" },
  { file: "images/murphys_irish_staut_040725_t.jpg", rarity: "epic", name: "Murphy's Irish Stout" },
  { file: "images/hop_raider_gold_040326_t.jpg", rarity: "legendary", name: "Hop Rider Gold" },
  { file: "images/hoprider_tekila_180326_t.jpg", rarity: "epic", name: "Hop Rider Tequila" },
  { file: "images/extrastout_17042025_t.jpg", rarity: "epic", name: "Hop Rider Extra Stout" },
  { file: "images/wheat_pale_18042025_t.jpg", rarity: "epic", name: "Hop Rider Wheat Pale Ale" },
  { file: "images/clausthaler_original_161024_t.jpg", rarity: "common", name: "Clausthaler Original" },
  { file: "images/pilsner_05052025_t.jpg", rarity: "common", name: "Pilsner Urquell" },
  { file: "images/session_ipa_18042025_t.jpg", rarity: "epic", name: "Hop Rider Session IPA" },
  { file: "images/feldi_cherry_04122025_t.jpg", rarity: "rare", name: "Feldi Cherry" },
  { file: "images/feldi_radler_04122025_t.jpg", rarity: "rare", name: "Feldi Radler" },
  { file: "images/feldsch_pilsner_220223.jpg", rarity: "common", name: "Feldschlosschen Pilsner" },
  { file: "images/pale_wheat_300124_t.jpg", rarity: "rare", name: "Feldschlosschen Pale Wheat" },
  { file: "images/praga_silver_160326_t.jpg", rarity: "common", name: "Praga Silver" },
  { file: "images/efes_pilsener_steklo_22092021.jpg", rarity: "common", name: "Efes Pilsener" },
  { file: "images/efes_300124_t.jpg", rarity: "common", name: "Efes" },
  { file: "images/lowenbrau_280220.jpg", rarity: "rare", name: "Lowenbrau" },
  { file: "images/harp_30072025_t.jpg", rarity: "rare", name: "Harp" },
  { file: "images/hofbrauhaus_07052025_t.jpg", rarity: "rare", name: "Hofbrauhaus Hell" },
  { file: "images/huber_weisses_261224_t.jpg", rarity: "rare", name: "Huber Weisses" },
  { file: "images/krombacher_pils_220523.jpg", rarity: "rare", name: "Krombacher Pils" },
  { file: "images/steininger_pils_15052025_t.jpg", rarity: "common", name: "Steininger Pils" },
  { file: "images/steininger_hefeweizen_15052025_t.jpg", rarity: "rare", name: "Steininger Hefeweizen" },
  { file: "images/greenbit_st_171025_t.jpg", rarity: "epic", name: "Green Beat" },
  { file: "images/london_prayd_131025_t.jpg", rarity: "rare", name: "Fuller's London Pride" },
  { file: "images/moscow_beer_230724_t.jpg", rarity: "common", name: "Moskvich" },
  { file: "images/moy_beer_071024_t.jpg", rarity: "rare", name: "Moy Beer Helles" },
  { file: "images/ohota_151025_t.jpg", rarity: "common", name: "Ohota Krepkoye" },
  { file: "images/ohota_zb_151025_t.jpg", rarity: "common", name: "Ohota Krepkoye" },
  { file: "images/t9_11092025_t.jpg", rarity: "common", name: "T9 Krepkoye" },
  { file: "images/zhigulevskoe_bochkovoe_23032022.jpg", rarity: "common", name: "Zhigulevskoe Bochkovoe" },
  { file: "images/zhiguli_1968_gb_061023_t.jpg", rarity: "common", name: "1968 Classic" },
  { file: "images/pivo_belorusskoe_070823.jpg", rarity: "common", name: "Belorusskoe" },
  { file: "images/rudnenskoe_231025_t.jpg", rarity: "common", name: "Rudnenskoye" },
  { file: "images/erebuni_10042025_t.jpg", rarity: "common", name: "Erebuni" },
  { file: "images/kotayk_10042025_t.jpg", rarity: "common", name: "Kotayk" },
  { file: "images/erzmann_beer_20042022.jpg", rarity: "common", name: "Premium Erzmann" },
  { file: "images/erzmann_light_260624_t.jpg", rarity: "common", name: "Premium Erzmann" },
  { file: "images/evrotur_schwarzbier_261225_t.jpg", rarity: "rare", name: "Euro Tour Schwarzbier" }
]).map((item) => ({
  ...item,
  id: item.file,
  name: item.name ?? formatBeerName(item.file),
  rarityLabel: getRarityLabel(item.rarity)
}));

const rarityWeights = {
  common: 56,
  rare: 28,
  epic: 12,
  legendary: 4
};

const trackConfig = {
  previewCount: 12,
  spinCount: 42,
  winnerIndex: 30,
  durationMs: 6200,
  revealDelayMs: 420
};

let appState = "idle";

function dedupeItems(items) {
  return items.filter((item, index, array) => {
    return array.findIndex((candidate) => candidate.file === item.file) === index;
  });
}

function formatBeerName(path) {
  const fileName = path.split("/").pop().replace(/\.[^.]+$/, "");
  const cleaned = fileName
    .replace(/[_-]t$/, "")
    .replace(/[_-]\d+$/g, "")
    .replace(/[_-]+/g, " ")
    .replace(/\bgb\b/gi, "")
    .trim();

  return cleaned
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getRarityLabel(rarity) {
  const labels = {
    common: "Common",
    rare: "Rare",
    epic: "Epic",
    legendary: "Legendary"
  };

  return labels[rarity];
}

function shuffle(array) {
  const copy = [...array];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function rotateLeft(array, offset) {
  if (array.length === 0) {
    return [];
  }

  const normalizedOffset = offset % array.length;
  return array.slice(normalizedOffset).concat(array.slice(0, normalizedOffset));
}

function buildPermutationChunk(previousTail = []) {
  const guardWindow = Math.min(4, previousTail.length);
  let permutation = shuffle(itemPool);

  if (guardWindow === 0) {
    return permutation;
  }

  for (let attempt = 0; attempt < 20; attempt += 1) {
    for (let rotation = 0; rotation < permutation.length; rotation += 1) {
      const rotated = rotateLeft(permutation, rotation);
      const recentIds = new Set(previousTail.map((item) => item.id));
      const leadingIds = rotated
        .slice(0, guardWindow)
        .map((item) => item.id);
      const hasConflict = leadingIds.some((id) => recentIds.has(id));

      if (!hasConflict) {
        return rotated;
      }
    }

    permutation = shuffle(itemPool);
  }

  return permutation;
}

function buildPermutationSequence(count) {
  const sequence = [];

  while (sequence.length < count) {
    const recentTail = sequence.slice(-4);
    const chunk = buildPermutationChunk(recentTail);
    sequence.push(...chunk);
  }

  return sequence.slice(0, count);
}

function getSafeReplacement(sequence, index, blockedIds = []) {
  const nearIds = new Set(blockedIds);

  for (let offset = -3; offset <= 3; offset += 1) {
    if (offset === 0) {
      continue;
    }

    const neighbor = sequence[index + offset];
    if (neighbor) {
      nearIds.add(neighbor.id);
    }
  }

  const candidates = itemPool.filter((item) => !nearIds.has(item.id));
  const source = candidates.length > 0 ? candidates : itemPool.filter((item) => item.id !== sequence[index]?.id);
  return shuffle(source)[0] || sequence[index];
}

function normalizeCloseRepeats(sequence, distance = 3) {
  for (let index = 0; index < sequence.length; index += 1) {
    const blockedIds = [];

    for (let offset = 1; offset <= distance; offset += 1) {
      const previousItem = sequence[index - offset];
      if (previousItem) {
        blockedIds.push(previousItem.id);
      }
    }

    if (blockedIds.includes(sequence[index]?.id)) {
      sequence[index] = getSafeReplacement(sequence, index, blockedIds);
    }
  }

  return sequence;
}

function createCardMarkup(item) {
  return `
    <article class="beer-card" data-rarity="${item.rarity}">
      <div class="beer-card__media">
        <img src="${item.file}" alt="${item.name}" loading="eager" />
      </div>
      <div class="beer-card__meta">
        <h2 class="beer-card__name">${item.name}</h2>
      </div>
    </article>
  `;
}

function renderTrack(items) {
  track.innerHTML = items.map(createCardMarkup).join("");
}

function buildPreviewItems() {
  return normalizeCloseRepeats(buildPermutationSequence(trackConfig.previewCount));
}

function buildSpinItems(winner) {
  const sequence = normalizeCloseRepeats(buildPermutationSequence(trackConfig.spinCount));
  sequence[trackConfig.winnerIndex] = winner;

  for (let offset = -3; offset <= 3; offset += 1) {
    const index = trackConfig.winnerIndex + offset;

    if (offset === 0 || index < 0 || index >= sequence.length) {
      continue;
    }

    if (sequence[index].id === winner.id) {
      sequence[index] = getSafeReplacement(sequence, index, [winner.id]);
    }
  }

  return normalizeCloseRepeats(sequence);
}

function getTrackMetrics() {
  const firstCard = track.firstElementChild;
  const cardWidth = firstCard.getBoundingClientRect().width;
  const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
  const viewportWidth = viewport.getBoundingClientRect().width;

  return {
    cardWidth,
    gap,
    viewportWidth
  };
}

function updateStatus(text) {
  if (statusText) {
    statusText.textContent = text;
  }
}

function setTrackPosition(px, withTransition = false) {
  track.style.transition = withTransition
    ? `transform ${trackConfig.durationMs}ms cubic-bezier(0.06, 0.84, 0.16, 1)`
    : "none";
  track.style.transform = `translate3d(${px}px, 0, 0)`;
}

function pickWinner() {
  const ticket = Math.random() * 100;
  let total = 0;
  let chosenRarity = "common";

  Object.entries(rarityWeights).forEach(([rarity, weight]) => {
    if (chosenRarity !== "common") {
      return;
    }

    total += weight;

    if (ticket <= total) {
      chosenRarity = rarity;
    }
  });

  const candidates = itemPool.filter((item) => item.rarity === chosenRarity);
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function preloadImages() {
  itemPool.forEach((item) => {
    const image = new Image();
    image.src = item.file;
  });
}

function openResult(winner) {
  resultCard.dataset.rarity = winner.rarity;
  resultImage.src = winner.file;
  resultImage.alt = winner.name;
  resultName.textContent = winner.name;
  resultRarity.textContent = winner.rarityLabel;
  resultOverlay.hidden = false;
  document.body.classList.add("modal-open");
  appState = "revealed";
  updateStatus(`Выпало: ${winner.name}`);
}

function closeResult() {
  resultOverlay.hidden = true;
  document.body.classList.remove("modal-open");
  if (appState !== "spinning") {
    appState = "idle";
    updateStatus("Готов к запуску");
  }
}

function resetToPreview() {
  renderTrack(buildPreviewItems());
  setTrackPosition(0, false);
}

function spin() {
  if (appState === "spinning") {
    return;
  }

  closeResult();
  appState = "spinning";
  spinButton.disabled = true;
  spinAgainButton.disabled = true;
  document.body.classList.add("is-spinning");
  updateStatus("Лента крутится...");

  const winner = pickWinner();
  const spinItems = buildSpinItems(winner);
  renderTrack(spinItems);
  setTrackPosition(0, false);

  requestAnimationFrame(() => {
    const { cardWidth, gap, viewportWidth } = getTrackMetrics();
    const winnerCenter =
      trackConfig.winnerIndex * (cardWidth + gap) + cardWidth / 2;
    const targetOffset = -(winnerCenter - viewportWidth / 2);

    requestAnimationFrame(() => {
      setTrackPosition(targetOffset, true);

      const onTransitionEnd = (event) => {
        if (event.target !== track || event.propertyName !== "transform") {
          return;
        }

        track.removeEventListener("transitionend", onTransitionEnd);
        document.body.classList.remove("is-spinning");
        spinButton.disabled = false;
        spinAgainButton.disabled = false;

        window.setTimeout(() => {
          openResult(winner);
        }, trackConfig.revealDelayMs);
      };

      track.addEventListener("transitionend", onTransitionEnd);
    });
  });
}

spinButton.addEventListener("click", spin);
spinAgainButton.addEventListener("click", spin);
closeResultButton.addEventListener("click", closeResult);

resultOverlay.addEventListener("click", (event) => {
  if (event.target === resultOverlay) {
    closeResult();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !resultOverlay.hidden) {
    closeResult();
  }
});

window.addEventListener("resize", () => {
  if (appState === "idle") {
    resetToPreview();
  }
});

preloadImages();
resetToPreview();
