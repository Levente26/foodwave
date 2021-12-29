import Codecool from '../images/codecool.png'

const About = () => {
    return(
        <div className="about">
            <div className="wrapper">
                <div className="content-6">
                        <h1>AboutFunctionality</h1>
                        <h1>AboutFunctionality</h1>
                </div>
            </div>
            <div className="paragraphs">
                <p>This web application is based on Foodpanda, Wolt, Bolt etc.</p>
                <br />
                <p>When you open the web application you'll see the landing page with the navbar, animated title and two navigation buttons.</p>
                <br />
                <p>One of the buttons navigate here, and the another one navigate to the location selector.</p>
                <br />
                <p>At the location selector, you can choose where you would like to order.</p>
                <br />
                <p>If you would like to order within Budapest, you must choose a district.</p>
                <br />
                <p>Because different districts or cities have different resturants, the location selector function as a filter.</p>
                <br />
                <p>If you choose your location, you'll see a list of resturants in this location, and two buttons which navigate back to the location selector.</p>
                <br />
                <p>If you find the resturant where you would like to order click the show products button and you will see a large list of products.</p>
                <br />
                <p>At this component you'll see the resturant name, some buttons and below the buttons the products.</p>
                <br />
                <p>You can filter products by clicking these buttons.</p>
                <br />
                <p>Every product has a button and by clicking this you can see ingredients or allergens.</p>
                <br />
                <p>If you would like to add to cart one of the products you must have login to first.</p>
                <br />
                <p>If you don't have an account yet, you can register easily by clicking the navbar's registration button, and then you can log in to the app.</p>
                <br />
                <p>You can see your user information under backend/database/users.json.</p>
                <br />
                <p>If you are successfully logged in the navbar'll change a bit and you'll see different buttons there.</p>
                <br />
                <p>After the authentication you can add to cart any products you want.</p>
                <br />
                <p>You can see your cart's content under backend/database/cart.json.</p>
                <br />
                <p>When you're ready you can see your cart's content, by clicking the navbar's cart button, and if you don't want to order something of the cart you can easily delete it by clicking the delete button.</p>
                <br />
                <p>If you would like to order your cart's content click the order button and enter your details.</p>
                <br />
                <p>After that if you click the order button and your order was successfull you can check it under backend/database/order.json.</p>
                <br />
                <p>The web application is fully responsive in all sizes.</p>
            </div>
            <div className="footer">
                <p>Created by Levente Madi</p>
                <img className='codecool' src={Codecool} alt='' />
            </div>
            
        </div>
    )
}
export default About