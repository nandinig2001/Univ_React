import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out what we do!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1570966096801-ca0ca3352ea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cnVyYWwlMjB3b21lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              text='Provide courses to skill'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1630983358494-96012d838b84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJ1cmFsJTIwd29tZW4lMjBzdHVkeWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              text='Jobs and manufacturing companies'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1549641951-27d6f488ed28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJ1cmFsJTIwd29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              text='Portal for Loan approval procedures'
              path='/services'
            />
            
            <CardItem
              src='https://media.istockphoto.com/photos/rural-women-using-phone-in-villlage-picture-id1309084086?b=1&k=20&m=1309084086&s=170667a&w=0&h=3VlfVO_Rodde2ocStY23330vYEs2zUIWoGW3NeM7g9Y='
              text='Read about'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
