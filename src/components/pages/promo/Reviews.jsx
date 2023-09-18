import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { leftArrow, rightArrow } from '../../../images/promoPage/index';
import review1 from '../../../images/promoPage/review1.png';
import review2 from '../../../images/promoPage/review2.png';

function Reviews() {

  const data = [
    {
      index: 0,
      reviewTitle: '«Благодаря партнерству с «Лого» мы стали чаще привлекать клиентов бонусами в конкретные точки. Метрики растут, вовлеченность увеличивается. ',
      reviewText: 'За 2 месяца сотрудничества наши ключевые показатели увеличились вдвое!»',
      reviewAuthor: 'Владислав Муратов',
      reviewerPost: 'директор сети кофеен «Юность»',
      image: review1,
    },
    {
      index: 1,
      reviewTitle: '«Мы повысили не только количество продаж, но и узнаваемость нашего небольшого заведения. ',
      reviewText: 'По программе «приведи друга и получи 300 бонусов на карту лояльности» мы зарегистрировали в 2 раза больше новых клиентов за 2 недели проведения, чем до нашего сотрудничества с «Logo»',
      reviewAuthor: 'Светлана Федотова ',
      reviewerPost: 'менеджер кофейни «Coffeemen»',
      image: review2,
    }
  ]

  return ( 
    <div className="bg-[#F6F7F8] pt-[147px] px-[115px] pb-[141px]">
      <CarouselProvider
        naturalSlideHeight={100}
        naturalSlideWidth={95}
        visibleSlides={1}
        totalSlides={2}
        className="flex justify-between h-[895px] w-full"
      >
        <ButtonBack><img src={leftArrow} alt="стрелка влево" /></ButtonBack>
        <Slider className="w-[1415px]">
          {data.map(item => (
            <Slide index={item.index} key={item.index}>
              <div className="flex">
                <div className="flex flex-col max-w-[691px] mt-[176px]">
                  <p className="mb-4 text-4xl font-bold">{item.reviewTitle}</p>
                  <p className="mb-20 text-4xl font-bold">{item.reviewText}</p>
                  <p className="mb-3 text-lg font-medium">{item.reviewAuthor}</p>
                  <p className="text-lg font-medium">{item.reviewerPost}</p>
                </div>
                <img src={item.image} alt="фото отзыва" />
              </div>
            </Slide>
          ))}
        </Slider>
        <ButtonNext><img src={rightArrow} alt="стрелка вправо" /></ButtonNext>
      </CarouselProvider>
    </div>
   );
}
 
export default Reviews;