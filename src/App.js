import React, { Component } from 'react';
import './App.css';
import {Intro} from './Components/Intro'
import {Social} from './Components/Social'
import {TileSelection} from './Components/TileSelection'
import {PlayVideo} from './Components/PlayVideo'
import {VideoCover} from './Components/VideoCover'


class App extends Component {
    constructor(props){
        super(props)
        this.state={
            active:{
                thumbnail:'https://umagazine.ie/uploads/article/2018/5/3695/article_Dua_Lipa.jpg?t=1529495372',
                title:'Dua Lipa 8',
                caption:'This is a caption about the dua lipa video',
                video:'https://www.youtube.com/embed/Q4-jOuHO-z4?autoplay=1',
                cover:'https://umagazine.ie/uploads/article/2018/5/3695/article_Dua_Lipa.jpg?t=1529495372'
            },
            play:false
        }
    }

    scrollToTop = () => {
        console.log('scroll')
        window.scrollTo(0, 0)
    }

    selectVideo = (t) => {
        this.scrollToTop()
        this.setState({active:t,play:false})
    }
    render() {
        console.log(this.state)
        return (
            <div className="container">
                <div className='row'>
                    <div className='c9'>
                        <div className='video'>
                            {
                                this.state.play ?
                                <PlayVideo 
                                    video={this.state.active.video}
                                />
                                :
                                <VideoCover 
                                    title={this.state.active.title}
                                    caption={this.state.active.caption}
                                    click={() => this.setState({play:true})}
                                    cover={this.state.active.cover}
                                />
                            }
                            
                        </div>
                    </div>
                    <div className='c3'>
                        <div className='tiles'>
                            <Intro 
                                title='Tiny Chef'
                                info='This is a sample website for daua lipa that displays images in a side bar and videos on the left.'
                            />

                             {/*Social*/}
                            
                                <Social />
                            
                            {/*Social*/}

                            {/*Tile Selection*/}

                                <TileSelection
                                    click={(e) => this.selectVideo(e)}
                                 />

                            {/*Tile Selection*/}

                           

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
