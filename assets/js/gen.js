function generateQuestions(data, category, module) {

    for (var i = 0; i < data[0].length; i++) {

        let title = `Sugestia dotycząca pytania nr ${data[0][i].id}`

        let issue = `
_Kategoria ${category}, ${module}_

**Aktualna treść pytania:** ${data[0][i].pytanie}

**Odpowiedzi:** ${data[0][i].odpa}, ${data[0][i].odpb}, ${data[0][i].odpc}

---

Treść uwagi: 

`

        let entry = '<h4>' + data[0][i].pytanie + '</h4><div class="media"><div class="media-content"><div class="content">';
        if (data[0][i].ilustracja != '') {
            entry += '<p class="image"><img class="ilustration" src="../ilustracje/' + data[0][i]
                .ilustracja + '"></p>'
        }
        entry += '<ol type="a"><li>' + data[0][i].odpa +
            '</li><li>' + data[0][i].odpb + '</li><li>' + data[0][i].odpc + '</li></ol>'
        entry +=
            '<a class="button is-primary is-light" href="https://github.com/HackerspaceKRK/pytania-egzaminacyjne/issues/new?title=' +
            encodeURIComponent(title) + '&body=' + encodeURIComponent(issue) +
            '">Zgłoś sugestię</a><hr></div></div></div>'

        d3.select("#questions").insert("article").attr("class", "post").html(entry);

    }

}