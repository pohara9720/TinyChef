import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            active:{
                thumbnail:'https://umagazine.ie/uploads/article/2018/5/3695/article_Dua_Lipa.jpg?t=1529495372',
                title:'Dua Lipa 8',
                caption:'This is a caption about the dua lipa video',
                video:'https://www.youtube.com/embed/Q4-jOuHO-z4',
                cover:'https://umagazine.ie/uploads/article/2018/5/3695/article_Dua_Lipa.jpg?t=1529495372'
            },
            play:false
        }
    }
    render() {
        console.log(this.state)
        const test = [{
            thumbnail:'https://umagazine.ie/uploads/article/2018/5/3695/article_Dua_Lipa.jpg?t=1529495372',
            title:'Dua Lipa',
            caption:'This is a caption about the dua lipa videohis is a caption about the dua lipa videohis is a caption about the dua lipa video',
            video:'https://www.youtube.com/embed/Q4-jOuHO-z4',
            cover:'https://umagazine.ie/uploads/article/2018/5/3695/article_Dua_Lipa.jpg?t=1529495372'
        },{
            thumbnail:'https://i.guim.co.uk/img/media/28c3786602f47b57004d9085fc9644ec02a87738/462_773_6898_4139/master/6898.jpg?width=300&quality=85&auto=format&fit=max&s=3667bce63357d658edf66f3027e20186',
            title:'Dua Lipa 2 ',
            caption:'This is a caption about the dua lipa video',
            video:'https://www.youtube.com/embed/xVrNFaeMvP8',
            cover:'https://i.guim.co.uk/img/media/28c3786602f47b57004d9085fc9644ec02a87738/462_773_6898_4139/master/6898.jpg?width=300&quality=85&auto=format&fit=max&s=3667bce63357d658edf66f3027e20186'
        },{
            thumbnail:'https://themusicnetwork.com/wp-content/uploads/dua-lipa-takes-aim-at-richard-wilkins-for-talking-out-your-arse.jpg',
            title:'Dua Lipa 3',
            caption:'This is a caption about the dua lipa video',
            video:'https://www.youtube.com/embed/9YffrCViTVk',
            cover:'https://themusicnetwork.com/wp-content/uploads/dua-lipa-takes-aim-at-richard-wilkins-for-talking-out-your-arse.jpg'
        },{
            thumbnail:'https://d2m3klzcmjgreb.cloudfront.net/wp-content/uploads/2018/01/dua-lipa-656x434.jpg',
            title:'Dua Lipa 4',
            caption:'This is a caption about the dua lipa video',
            video:'https://www.youtube.com/embed/Q4-jOuHO-z4',
            cover:'https://umagazine.ie/uploads/article/2018/5/3695/article_Dua_Lipa.jpg?t=1529495372'
        },{
            thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_qoy4qsL4lF47kiFFVe7yAG7hXNyKWlS25Vi5-XxObcosv5GiA',
            title:'Dua Lipa 5',
            caption:'This is a caption about the dua lipa video',
            video:'https://www.youtube.com/embed/Q4-jOuHO-z4',
            cover:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_qoy4qsL4lF47kiFFVe7yAG7hXNyKWlS25Vi5-XxObcosv5GiA'
        },{
            thumbnail:'https://media.gettyimages.com/photos/dua-lipa-performs-onstage-during-billboard-and-mastercard-present-a-picture-id911237224?s=612x612',
            title:'Dua Lipa 6',
            caption:'This is a caption about the dua lipa video',
            video:'https://www.youtube.com/embed/Q4-jOuHO-z4',
            cover:'https://media.gettyimages.com/photos/dua-lipa-performs-onstage-during-billboard-and-mastercard-present-a-picture-id911237224?s=612x612'
        },{
            thumbnail:'https://umagazine.ie/uploads/article/2018/5/3695/article_Dua_Lipa.jpg?t=1529495372',
            title:'Dua Lipa 7 ',
            caption:'This is a caption about the dua lipa video',
            video:'https://www.youtube.com/embed/Q4-jOuHO-z4',
            cover:'https://umagazine.ie/uploads/article/2018/5/3695/article_Dua_Lipa.jpg?t=1529495372'
        },{
            thumbnail:'https://umagazine.ie/uploads/article/2018/5/3695/article_Dua_Lipa.jpg?t=1529495372',
            title:'Dua Lipa 8',
            caption:'This is a caption about the dua lipa video',
            video:'https://www.youtube.com/embed/Q4-jOuHO-z4',
            cover:'https://umagazine.ie/uploads/article/2018/5/3695/article_Dua_Lipa.jpg?t=1529495372'
        }]
        const soc = [{
            platform:'youtube',
            link:'https://umagazine.ie/uploads/article/2018/5/3695/article_Dua_Lipa.jpg?t=1529495372'
        },{
            platform:'facebook',
            link:'https://umagazine.ie/uploads/article/2018/5/3695/article_Dua_Lipa.jpg?t=1529495372'
        },{
            platform:'instagram',
            link:'https://umagazine.ie/uploads/article/2018/5/3695/article_Dua_Lipa.jpg?t=1529495372'
        },{
            platform:'twitter',
            link:'https://umagazine.ie/uploads/article/2018/5/3695/article_Dua_Lipa.jpg?t=1529495372'
        }]
        return (
            <div className="container">
                <div className='row'>
                    <div className='c9'>
                        <div className='video'>
                            {
                                this.state.play ?
                                <div className='iframe-container'>
                                    <iframe title='active' src={this.state.active.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                :
                                <div style={{backgroundImage: `url(${this.state.active.cover})`}} className='video-cover'>
                                    <div className='overlay'>
                                        <div>
                                            <h1>{this.state.active.title}</h1>
                                            <h3>{this.state.active.caption}</h3>
                                        </div>
                                        <div className='icon-container'>
                                            <i onClick={() => this.setState({play:true})} className="far fa-play-circle"></i>
                                        </div>
                                    </div>
                                </div>
                            }
                            
                        </div>
                    </div>
                    <div className='c3'>
                        <div className='tiles'>
                            {/*Intro*/}
                            <div className='intro'>
                                <div className='main-avatar'></div>
                                <h1>Tiny Chef</h1>
                                <h5>This is a sample website for daua lipa that displays images in a side bar and videos on the left.</h5>
                            </div>
                            {/*Intro*/}

                             {/*Social*/}
                            
                                <div className='social'>
                                {
                                    soc.map((s,i) =>  
                                    <a  key={i} href={s.link}>
                                        <i  className={
                                            s.platform === 'youtube' ? 'fab fa-youtube' : 
                                            s.platform === 'instagram' ? 'fab fa-instagram' : 
                                            s.platform === 'facebook' ? 'fab fa-facebook-f' : 'fab fa-twitter'}></i>
                                    </a>)
                                }
                                </div>
                            
                            {/*Social*/}

                            {/*Tile Selection*/}

                                <div className='tiles-select row'>
                                    <h3>Videos</h3>
                                    {
                                        test.map((t,i) => <div onClick={() => this.setState({active:t,play:false})} key={i} style={{backgroundImage: `url(${t.thumbnail})`}} className='c6 tile-img'></div>)
                                    }
                                </div>

                            {/*Tile Selection*/}

                           

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
