const express = require('express'),
    fetch = require("node-fetch"),
    path = require('path'),
    cors = require('cors');
request = require('request-promise');

let app = express();

var corsOptions = {
    origin: 'http://localhost:8000/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors());

app.route("/api/image/").get((req, res) => {
    fetch("http://ddragon.leagueoflegends.com/cdn/10.1.1/data/en_US/champion.json")
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        })
        .catch(err => {
            res.send(err);
        });
});

app.route("/api/spell/").get((req, res) => {
    fetch("http://ddragon.leagueoflegends.com/cdn/10.1.1/data/en_US/summoner.json")
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        })
        .catch(err => {
            res.send(err);
        });
});

app.route("/api/item/").get((req, res) => {
    fetch("https://ddragon.leagueoflegends.com/cdn/10.1.1/data/en_US/item.json")
        .then(res => res.json())
        .then(data => {
            res.send({ data });
            // console.log(data);
        })
        .catch(err => {
            res.send(err);
        });
});

app.route("/api/profile/").get((req, res) => {
    fetch("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + req.query.name + "?api_key=RGAPI-c3d4126d-0e72-4689-abc0-394f2e5d520c")
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        })
        .catch(err => {
            res.send(err);
        });
});

app.route('/api/ranked/').get((req, res) => {
    fetch('https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + req.query.summonerID + '?api_key=RGAPI-c3d4126d-0e72-4689-abc0-394f2e5d520c')
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        })
        .catch(err => {
            res.send(err);
        });
});

app.route("/api/data/").get((req, res) => {
    fetch("https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/" + req.query.id + "?beginIndex=0&endIndex=20&api_key=RGAPI-c3d4126d-0e72-4689-abc0-394f2e5d520c")
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        })
        .catch(err => {
            res.send(err);
        });
});

app.route("/api/player/").get((req, res) => {
    Promise.all(req.query.gameids.map(id => fetch("https://na1.api.riotgames.com/lol/match/v4/matches/" + id + "?api_key=RGAPI-c3d4126d-0e72-4689-abc0-394f2e5d520c")))
        .then(res => Promise.all(res.map(res => res.json())))
        .then(data => {
            res.send({ data });
        })
        .catch(err => {
            res.send(err);
        });
});


app.listen(8000, () => {
    console.log('Server started!')
})