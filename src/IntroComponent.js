import React from 'react'

export default function IntroComponent() {

  return (
    <html>
    <body>
        <main>
            <section class="learn">
                <h1>Learn to code by watching others</h1>
                
                <p>See how experienced dvelopers solve problems in real time. Watching scripted tutorials 
                    is great, but understanding how developers think is invaluable. </p>
            </section>

            <section>
              <div class="head">
                <p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
              </div>
          
              <form action="#" id="form">
                <div>
                    <input type="text" name="firstname" id="fname" placeholder="First Name" required />
                </div>
                <div>
                    <input type="text" name="lastname" id="lname" placeholder="Last Name" required />
                </div>
                <div>
                    <input type="email" name="email" id="email" placeholder="Email address" required />
                </div>
                <div>
                    <input type="password" name="pswd" id="pswd" placeholder="Password" required />
                </div>
                <div>
                    <button type="Submit" value="Claim your free trail">Claim your free trail</button>
                </div>
                <div class="footer">
                <p>By clicking the button you are agreeing to our <strong>Terms and services</strong></p>
            </div>
              </form>
            </section>
        </main>
    </body>
</html>
    )
}
