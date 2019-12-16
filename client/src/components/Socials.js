import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

export default class Contact extends Component {
  render() {
    return (
        <section className='Socials'>
          <SocialIcon url='https://github.com/nyhchang' />
          <SocialIcon url='https://www.linkedin.com/in/nathan-chang-58ab33b0/' />
          <SocialIcon url='mailto:nyhchang222@gmail.com' />
        </section>
    )
  }
}