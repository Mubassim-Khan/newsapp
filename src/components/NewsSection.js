import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsSection extends Component {
  articles = [
    {
      "source": {
        "id": "four-four-two",
        "name": "FourFourTwo"
      },
      "author": "Dean Jones",
      "title": "Former Chelsea and Fulham kit man Garry Grey had his gran to thank for his career - now he’s a football agent",
      "description": "From laying out boots for Frank Lampard and John Terry, Grey now has an extensive list of contacts to work with",
      "url": "https://www.fourfourtwo.com/news/former-chelsea-and-fulham-kit-man-garry-grey-had-his-gran-to-thank-for-his-career-now-hes-a-football-agent",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/hDRzXXkxdB3UdbymWYypHS-1200-80.jpg",
      "publishedAt": "2023-07-09T13:00:51Z",
      "content": "Garry Grey has won more medals than most top-flight footballers. Not bad for a kit man. \r\nThrough his roles at Fulham and Chelsea, Grey has spent all of his adulthood rubbing shoulders with world-bea… [+2981 chars]"
    },
    {
      "source": {
        "id": "talksport",
        "name": "TalkSport"
      },
      "author": "161385360554578",
      "title": "De Gea leaves Man United, Chelsea agree to sell Pulisic, Rice and Timber to Arsenal latest",
      "description": "talkSPORT.com brings you all the latest football news, views and transfer gossip. Check out the headline stories and follow our live blog below for regular updates throughout the day. Headlines: EV…",
      "url": "https://talksport.com/football/1486182/football-news-live-rice-onana-arsenal-chelsea-man-utd/",
      "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/07/PM-TALKSPORT-Blog-8th-July-AM.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
      "publishedAt": "2023-07-09T09:09:59Z",
      "content": "Mauricio Pochettino would not be drawn on whether he would push for Chelsea to reunite him with England captain Harry Kane as he was formally unveiled as manager at Stamford Bridge.\r\nThe pair enjoyed… [+1485 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": null,
      "title": "Report: Ex-Northwestern football player details hazing, including alleged sexual misconduct",
      "description": "A day after Northwestern suspended football coach Pat Fitzgerald amid hazing allegations, ex-players allege sexual misconduct in student newspaper report",
      "url": "https://www.usatoday.com/story/sports/ncaaf/2023/07/08/northwestern-football-player-alleges-hazing-sexual-misconduct-report/70394603007/",
      "urlToImage": "https://www.gannett-cdn.com/-mm-/cd916a4915512969c5dbac65b52e2165991ae992/c=0-382-5438-3441/local/-/media/2015/08/17/USATODAY/usatsports/3ab2042bde3a61247f0f6a706700239c.jpg?auto=webp&format=pjpg&width=1200",
      "publishedAt": "2023-07-09T05:35:47+00:00",
      "content": "A former Northwestern football player has come forward with details of hazing that included alleged sexual violations, The Daily Northwestern reported Saturday. The news comes a day after the school … [+4149 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Adam Rittenberg",
      "title": "Northwestern to reconsider Fitzgerald penalty amid hazing probe - ESPN",
      "description": "Northwestern, in a letter sent late on Saturday night, announced it will reconsider penalties for longtime Wildcats coach Pat Fitzgerald after new details emerged surrounding allegations of hazing in the Big Ten school's football program.",
      "url": "https://www.espn.com/college-football/story/_/id/37980269/ex-northwestern-player-says-hazing-included-sexualized-acts",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F0504%2Fr80072_1296x729_16%2D9.jpg",
      "publishedAt": "2023-07-08T20:18:00Z",
      "content": "Northwestern will reconsider penalties for coach Pat Fitzgerald after new details emerged Saturday surrounding allegations of hazing in the football program.\r\nUniversity president Michael Schill, in … [+5498 chars]"
    },
    {
      "source": {
        "id": "four-four-two",
        "name": "FourFourTwo"
      },
      "author": "Chris Flanagan",
      "title": "Diogo Jota believes no other footballer could beat him at FIFA - especially not Cristiano Ronaldo",
      "description": "In an exclusive interview, the Liverpool forward tells FourFourTwo that he's even defeated eSports professionals",
      "url": "https://www.fourfourtwo.com/news/diogo-jota-fifa-expert-cristiano-ronaldo",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/zdx63Q25PHw2VPatcMvVFX-1200-80.jpg",
      "publishedAt": "2023-07-08T11:00:37Z",
      "content": "Diogo Jota isn’t just one of the Premier League’s most dangerous forwards - he’s also a whizz at FIFA.\r\nThe Liverpool star celebrated his winner against Tottenham by sitting on the turf, pretending t… [+2230 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      "publishedAt": "2020-04-27T07:20:43Z",
      "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
    }
  ]

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>MAK News - Top Headlines</h2>
        <div className="row">

        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title} description={element.description.slice(0, 100)} newsURL={element.url} imgURL={element.urlToImage} />
          </div>
        })}

        </div>
      </div>
    )
  }
}
