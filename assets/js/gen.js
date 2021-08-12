function generateQuestions(data, category, module) {

    for (var i = 0; i < data[0].length; i++) {

        let title = `Sugestia dotycząca pytania kat. ${category}, dział ${module}, nr ${data[0][i].id}`

        let issue = `
**Aktualna treść pytania:** ${data[0][i].pytanie}

**Odpowiedzi:** ${data[0][i].odpa}, ${data[0][i].odpb}, ${data[0][i].odpc}

---

Treść uwagi: 


`

        let questionData = data[0][i]
        let entry = '<h4 id="pytanie-' + questionData.id +'">' + questionData.id + ". " + questionData.pytanie + '</h4><div class="media"><div class="media-content"><div class="content">';
        if (questionData.ilustracja != '') {
            entry += '<p class="image"><img class="ilustration" src="../ilustracje/' + questionData
                .ilustracja + '"></p>'
        }
        entry += '<ol type="a"><li>' + questionData.odpa +
            '</li><li>' + questionData.odpb + '</li><li>' + questionData.odpc + '</li></ol>'
        entry +=
            '<a class="button is-primary is-light" href="https://github.com/HackerspaceKRK/pytania-egzaminacyjne/issues/new?title=' +
            encodeURIComponent(title) + '&body=' + encodeURIComponent(issue) +
            '">Zgłoś sugestię</a> <a class="button is-light" href="#pytanie-'+ questionData.id + '">Link do pytania</a><hr></div></div></div>'

        d3.select("#questions").insert("article").attr("class", "post").html(entry);

    }

}