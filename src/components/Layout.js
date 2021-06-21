import React from 'react'

const Layout = ( {children} ) => {
    return(
        <main>
          <article>
            <section className="img-section">
                {/*place for the left section photo*/}
                <div className="img-div">
                    <img 
                        src="https://i.pinimg.com/originals/53/83/fa/5383faafa5316d71036c2ece988293bb.jpg"
                        alt=""
                        className="img-start"
                    />
                </div>
            </section>
            <section className="main-section">
                {/*place for the component*/}
                {children}
            </section>
         </article>
        </main>
    )
}

export default Layout;