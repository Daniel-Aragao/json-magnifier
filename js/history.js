function addToHistory() {
    let history = JSON.parse(localStorage.getItem(QUERY_HISTORY));

    if (!history) {
        history = [];
    }

    const lastHistory = history[history.length - 1];

    const newHistory = {
        query: query.value,
        toCount: toCount.checked,
        data: data.value,
        date: new Date(),
    };

    if (!lastHistory || !historyEqual(newHistory, lastHistory)) {
        replaceRepeated(newHistory, history);

        history.push(newHistory);

        ensureLimit(history);

        localStorage.setItem(QUERY_HISTORY, JSON.stringify(history));
    }
}

function historyEqual(h1, h2) {
    return (
        h1.query === h2.query &&
        h1.toCount === h2.toCount &&
        h1.data === h2.data
    );
}

function replaceRepeated(newHistory, history) {
    const index = history.findIndex((v, i) => historyEqual(newHistory, v));

    if (index >= 0) {
        history.splice(index, 1);
    }
}

function ensureLimit(history) {
    if (history?.length > QUERY_HISTORY_LIMIT) {
        history.reverse().pop();
        history.reverse();
    }
}

function showHistory(btn) {
    if (btn.classList.contains("pressed")) {
        visibleHistory = false;
        historyContainer.classList.add("hide");
        btn.classList.remove("pressed");
    } else {
        visibleHistory = true;

        updateHistoryContainer();
        historyContainer.classList.remove("hide");

        btn.classList.add("pressed");
    }
}

function updateHistoryContainer() {
    if (visibleHistory) {
        let history = JSON.parse(localStorage.getItem(QUERY_HISTORY));

        if (history?.length) {
            historyContainer.innerHTML = "";
            historyContainer.append(
                ...history.map(generateHistoryCard).reverse()
            );
        }
    }
}

function generateHistoryCard(historyLog) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardQuery = document.createElement("div");
    cardQuery.classList.add("card-header");
    cardQuery.innerText = historyLog.query;

    const cardData = document.createElement("div");
    cardData.classList.add("card-data");

    const cardDataText = document.createElement("pre");
    cardDataText.classList.add("card-data-text");
    cardDataText.innerText = historyLog.data;

    const cardTags = document.createElement("div");
    cardTags.classList.add("card-tags");

    if (historyLog.toCount) {
        const cardToCount = document.createElement("a");
        cardToCount.classList.add("card-tag");
        cardToCount.innerText = "Count";

        cardTags.append(cardToCount);
    }

    if (historyLog.date) {
        const cardTime = document.createElement("span");
        cardTime.classList.add("card-time");
        cardTime.innerText = historyLog.date;

        card.append(cardTime);
    }

    cardData.append(cardDataText);
    card.append(cardQuery);
    card.append(cardData);
    card.append(cardTags);

    card.onclick = () => {
        query.value = historyLog.query;
        toCount.checked = historyLog.toCount;
        data.value = historyLog.data;
    };

    return card;
}
