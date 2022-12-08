import './Home.css';

const Home = () =>{
    return (
        <>
        <div>

            <div className='heading'>
        <div >
            <h3 className='album'>Get our Latest Album</h3>
        </div>
        <div>
        <i class="fa-solid fa-play playicon"></i>
    
        </div>
        </div>

        <div>
            <div>
                <h2 className="mb-5 mt-5" style={{textAlign:"center"}}>TOURS</h2>
            </div>

            <ul >
                <li className="d-flex justify-content-between" >
                    <div>
                    Jul16
                    DETROITM MI
                    DTE ENERGY MUSIC THEATRE</div>
                  <div><button>BUT TICKETS</button></div> 
                </li>

                <hr/>
                
                <li>
                    <div>
                    JUL19
                    TORONTO,ON
                  BUDWEISER STAGE</div>
                  <div><button>BUT TICKETS</button></div>
                </li>

                <hr/>

                <li>
                    <div>
                   Jul 16
                      BRISTOW, VA
                  JIGGY LUBE LIVE</div>
                <div>  <button>BUT TICKETS</button></div>
                </li>

                <hr/>

                {/* <li>
                    <span>Jul 16</span>
                    <span>DETROITM MI</span>
                    <span>JIGGY LUBE LIVE</span>
                    <span><button>BUT TICKETS</button></span>
                </li>

                <li>
                    <span>Jul 16</span>
                    <span>PHOENIX, AZ</span>
                    <span>AK-CHIN PAVILION</span>
                    <span><button>BUT TICKETS</button></span>
                </li>

                <li>
                    <span>Jul 16</span>
                    <span>CONCORD, CA</span>
                    <span>CONCORD PAVILION</span>
                    <span><button>BUT TICKETS</button></span>
                </li> */}
            </ul>
        </div>
        </div>
        </>
    )
}

export default Home;