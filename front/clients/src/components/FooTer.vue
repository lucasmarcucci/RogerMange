<template>
  
    <div class="footer">
        <footer class="footer--section">
        <div class="footer__addr">
          <span id="logo" class="footer__logo">Roger  <span style="color: green;"><b>Mange</b></span></span>
              
          <h2>Contact</h2>
          
          <address>
            13 Av. Simone Veil, 06200 Nice<br>
                
            <a class="footer__btn" href="mailto:example@gmail.com">Nous écrire</a>
          </address>
        </div>
        
        <ul class="footer__nav">
          <li class="nav__item">
            <h2 class="nav__title">Legal</h2>
            
            <ul class="nav__ul">
              <li>
                <a href="#">Politique de confidentialité</a>
              </li>
              
              <li>
                <a href="#">Conditions d'utilisation</a>
              </li>
            </ul>
          </li>
        </ul>
        
        <div class="legal">
          <p>&copy; 2022 Roger Mange. Tous droits réservés.</p>
          
          <div class="legal__links">
            <span>CESI Nice</span>
          </div>
        </div>
      </footer>
    </div>

</template>

<script>
export default {
    name: "FooTer"
}
</script>

<style lang="scss">

.footer--section {
    display: flex;
    flex-flow: row wrap;
    padding: 30px 30px 20px 30px;
    color: #2f2f2f;
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
  }
  
.footer--section > * {
flex:  1 100%;
}

.footer__addr {
margin-right: 1.25em;
margin-bottom: 2em;
}

.footer__logo {
font-weight: 400;
font-size: 1.5rem;
}

.footer__addr h2 {
margin-top: 1.3em;
font-size: 15px;
font-weight: 400;
}

.nav__title {
font-weight: 400;
font-size: 15px;
}

.footer--section address {
font-style: normal;
color: #999;
}

.footer__btn {
display: flex;
align-items: center;
justify-content: center;
height: 36px;
max-width: max-content;
background-color: rgb(33, 33, 33, 0.07);
border-radius: 100px;
color: #2f2f2f;
line-height: 0;
margin: 0.6em 0;
font-size: 1rem;
padding: 0 1.3em;
}

.footer__btn:hover{
background-color: rgba(33, 33, 33, 0.2);
}

.footer--section ul {
list-style: none;
padding-left: 0;
}

.footer--section li {
line-height: 2em;
}

.footer--section a {
text-decoration: none;
}

.footer__nav {
display: flex;
    flex-flow: row wrap;
}

.footer__nav > * {
flex: 1 50%;
margin-right: 1.25em;
}

.nav__ul a {
color: #999;
}

.nav__ul a:hover {
color: #000;
}

.legal {
display: flex;
flex-wrap: wrap;
color: #999;
}

@media screen and (min-width: 24.375em) {
.legal .legal__links {
    margin-left: auto;
}
}

@media screen and (min-width: 40.375em) {
.footer__nav > * {
    flex: 1;
}

.nav__item--extra {
    flex-grow: 2;
}

.footer__addr {
    flex: 1 0px;
}

.footer__nav {
    flex: 2 0px;
}
}

</style>