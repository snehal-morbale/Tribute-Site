import React from 'react';
import './Css/Style.css'

const Home = () => {
    return (
        <div>
      <div className="container-fluie">
        <img src="https://images.moneycontrol.com/static-mcnews/2023/07/APJ-Abdul-Kalam.png?impolicy=website&width=1600&height=900" alt="" id='img-1'/>
        <div className="row m-5">
          <div className="col-6">
            <h1>Introduction</h1>
            <p>Kalam was elected as the 11th president of India in 2002 with the support of both the ruling Bharatiya Janata Party and the then-opposition Indian National Congress. Widely referred to as the "People's President". he returned to his civilian life of education, writing and public service after a single term. He was a recipient of several prestigious awards, including the Bharat Ratna, India's highest civilian honour.</p>
            <p>
            Born into an upper-middle-class family of the Kayastha (scribes) caste in Bengal, he was educated at a Western-style university where he was exposed to Western philosophy, Christianity, and science. Social reform became a prominent element of Vivekananda’s thought, and he joined the Brahmo Samaj (Society of Brahma), dedicated to eliminating child marriage and illiteracy and determined to spread education among women and the lower castes. He later became the most-notable disciple of Ramakrishna, who demonstrated the essential unity of all religions.
            </p>
          </div>
          <div className="col-6">
            <img src="https://cdn.britannica.com/56/148856-004-2F59E2D9/APJ-2008.jpg" alt="" id="img-2"/>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-6">
            <img src="https://i0.wp.com/apeejay.news/wp-content/uploads/2023/10/131023-APJ-Abdul-Kalam-01.jpg?resize=740%2C740&ssl=1" alt="" id="img-2"/>
          </div>
          <div className="col-6">
            <h1>Education, Works, Teachings, and Famous Quotes</h1>
            <p>Kalam was the youngest of four brothers and one sister in his family.</p>
            <p> His ancestors had been wealthy Marakayar traders and landowners, with numerous properties and large tracts of land.</p>
            <p>Kalam moved to Madras in 1955 to study aerospace engineering in Madras Institute of Technology</p>
          </div>
        </div>
        <div className="row m-5">
          <div className="col-6">
            <h2>Meeting with Ramakrishna Paramahamsa</h2>
            <p>After graduating from the Madras Institute of Technology in 1960, Kalam joined the Aeronautical Development Establishment of the Defence Research and Development Organisation (by Press Information Bureau, Government of India) as a scientist after becoming a member of the Defence Research & Development Service (DRDS).</p>
            <h2>Kalam served as the 11th president of India, succeeding K. R. Narayanan.</h2>
            <p>He won the 2002 presidential election with an electoral vote of 922,884, surpassing the 107,366 votes won by Lakshmi Sahgal. His term lasted from 25 July 2002, to 25 July 2007.</p>
            <h2>Post-presidency</h2>
            <p>After leaving office, Kalam became a visiting professor at the Indian Institute of Management Shillong, the Indian Institute of Management Ahmedabad, and the Indian Institute of Management Indore; an honorary fellow of Indian Institute of Science, Bangalore;</p>
            </div>
          <div className="col-6">
            <img src="https://miro.medium.com/v2/resize:fit:990/1*Wfh8_67EEwAiSue2kLlT0A.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div className="books">Books of Dr. APJ Abdul Kalam</div>
      <div className="container-book">
        <img className="me-5" src="https://www.indicinspirations.com/cdn/shop/products/wings-of-fire-an-autobiography-of-abdul-kalam-books-908170.jpg?v=1627154447" alt=""></img>
        <img className="me-5" src="https://m.media-amazon.com/images/I/71Lq+Wuc76L._AC_UF1000,1000_QL80_.jpg" alt=""></img>
        <img className="me-5" src="https://cdn.kobo.com/book-images/7098c07c-90e0-44a0-b29b-52c3acad575d/1200/1200/False/a-p-j-abdul-kalam-a-life.jpg" alt=""></img>
      </div>
     </div>
    );
}

export default Home;
