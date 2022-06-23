import React, { Component } from 'react'

export default class Help extends Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron mt-5'>
          <div align='center' className='col-sm-1 mxx-auto'>
            <h1>
              What's New in ProFile…
            </h1>
          </div>
          <br />
          <div align='center' className='col-sm-8 mx-auto'>
            <h3>Servive Hotline: 0702385230</h3>
          </div>

        </div>











        <section class="cd-faq js-cd-faq container max-width-md margin-top-lg margin-bottom-lg">
          <ul class="cd-faq__categories">
            <li><a class="cd-faq__category cd-faq__category-selected truncate" href="#basics">Basics</a></li>
            <li><a class="cd-faq__category truncate" href="#mobile">Mobile</a></li>
            <li></li>

          </ul>

          <div class="cd-faq__items">
            <ul id="basics" class="cd-faq__group">
              <li class="cd-faq__title"><h2>Basics</h2></li>
              <li class="cd-faq__item">
                <a class="cd-faq__trigger" href="#0"><span>How do I change my password?</span></a>
                <div class="cd-faq__content">
                  <div class="text-component">

                  </div>
                </div>
              </li>

              <li class="cd-faq__item">
                <a class="cd-faq__trigger" href="#0"><span>How do I sign up?</span></a>
                <div class="cd-faq__content">
                  <div class="text-component">

                  </div>
                </div>
              </li>




            </ul>

            <ul id="mobile" class="cd-faq__group">

            </ul>


          </div>

          <a href="#0" class="cd-faq__close-panel text-replace">Close</a>

          <div class="cd-faq__overlay" aria-hidden="true"></div>
        </section>














      </div>
    )
  }
}