import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Loader from '../common/loader/Loader';
import "./VideoBlog.css"
const Videos = [
    {
        url: 'https://www.youtube.com/watch?v=N8CMKC-IYPo&t=2s',
        description: ` <p className='video-desc'>
        If you are still inside the vi editor,
        you might be in a different mode from the one you want.
        Hit ESC a couple of times (until it rings or flashes) and then "i"
        to enter INSERT mode or "a" to enter APPEND mode (they are the same, just
        start before or after current character).<br/>
<br/>

        Once the edition is done, hit ESC again, then type :wq to save your work or :q!
        to quit without saving.<br/>

        For quick reference, <a href='http://www.lagmonster.org/docs/vi.html'>here</a> you have a text-based cheat sheet.
    </p>`
    },
    {
        url: 'https://www.youtube.com/watch?v=O5pal9hux7A&t=263s',
        description: ` <p className='video-desc'>
        Also check for any references to the Android in Device Manager by going to 
        “Control Panel” > “Hardware and Sound” > “Device Manager“. It may be detected as an 
        “MTP or “Unknown Device” under “Other Devices” or “Portable Devices“. Try right-clicking 
        then selecting “Uninstall“. 
        Once the device is removed, try restarting Windows by going to “Start” > “Restart“.
    </p>`
    },
    {
        url: 'https://www.youtube.com/watch?v=iz8PBxY0nug',
        description: ` <p className='video-desc'>
        Everything is good in this bike like mileage, Comfort, Driving, 
        Performance.I feel better after driving this bike.Definitely the bike 
        is capable of doing those distance, it comes to the rider and his willpower, 
        unless you have a goal and covering long distance within short time might be less
        tiring for that higher cruising speed is required here the wind is not in favour to you as 
        it is naked bike. So anywhere between 80-90 will be ideal for you. be scared of crosswinds 
        from cars and big lorry that pass by you either it will push or pull you , 
        at the end of the day not careful enough could make you smile in a photo frame to eternity.
        </p>`
    },
    {
        url: 'https://www.youtube.com/watch?v=vPLrDBsyRVg',
        description: ` <p className='video-desc'>
        Live your dream of soaring like a bird in the sky and cruising among the clouds. 
        Paragliding in Khajjiar is certainly the most 
        sought after adventure activity in Himachal. The quaint village tucked in the Chamba district of Himachal Pradesh acts as a perfect weekend getaway from Delhi. It is also a completely hassle free destination to live your dream of flying without the rumbling noise of motors deafening your ears.

Khajjiar is an offbeat travel destination where you 
can plan a weekend trip, relax, unwind, savor the moments, 
behold the majestic Kailash, and come back with a refreshed mind.
        </p>`
    },
    {
        url: 'https://www.youtube.com/watch?v=r7ghB0HAn68',
        description: ` <p className='video-desc'>
        The pristine beauty of McLeod Ganj attracts those who seek spiritual reflection and relaxation. It is natural for these visitors to also look around for Tibetan artifacts that they can buy and carry with them as mementoes, souvenirs or as gifts for their near and dear ones.
Shops in McLeod Ganj cater to the varied taste of its many visitors, who wish to purchase the beautiful and unique handcrafted items. Most Tibetan handicrafts and artifacts draw inspiration from nature while some of them display religious figures and spiritual symbols. Here we have compiled a list of 10 excellent places to do your shopping in McLeod Ganj.
        </p>`
    },
    {
        url: 'https://www.youtube.com/watch?v=HV-PzR9HHVk',
        description: ` <p className='video-desc'>
        WFH means an employee is working from their house, apartment, or place of residence, rather than working from the office. Many companies have a WFH policy, or remote work policy, that allows their employees to work from home either full-time or when it's most convenient for them.</p>`
    },
    {
        url: 'https://www.youtube.com/watch?v=UAKVkdVBACY',
        description: ` <p className='video-desc'>
        The raw sweat dripping over you,The bare road hitting on you .True spirit of a Ride is through the Storm beating the shit out of you . Love is Royal Enfield ; Rest are all Cornfield.</p>`
    },

]
function VideoBlog() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);
    const renderVideos = () => {
        return Videos.map((video, index) => {
            if (index % 2 !== 0) {
                return (
                    <Row style={{ margin: "20px" }}>
                        <Col key={index} >
                            <p className='video-desc' dangerouslySetInnerHTML={{ __html: video.description }}></p>
                        </Col>
                        <Col >
                            <ReactPlayer url={video.url} width='100%' controls={true} />
                        </Col>
                    </Row>
                )
            }
            else {

                return (
                    <Row>
                        <Col key={index}>
                            <ReactPlayer url={video.url} width='100%' controls={true} />
                        </Col>
                        <Col>
                            <p className='video-desc' dangerouslySetInnerHTML={{ __html: video.description }}></p>
                        </Col>
                    </Row>
                )
            }
        })

    }
    return (
        <div>
            {
                loading ? <Loader /> : 
                    <Row>
                        <h1>Video Blog</h1>
                        {renderVideos()}

                    </Row>
            }

        </div>
    )
}

export default VideoBlog