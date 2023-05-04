import styled from "styled-components";
import CategoryItem from "./Category-Item";

const Directory = ({categories}) => {
    return (
        <Wrapper>
        <h4 className="text-animation">It's you who turns the look into something unforgettable.</h4>
        <div className="categories-container">
         {categories.map((category) => {
         return <CategoryItem key={category.id} category={category}/>
         })}
    
     </div>
        </Wrapper>
    )
};

export default Directory;


const Wrapper = styled.div`
width:100vw;
.text-animation{
    font-size:clamp(1rem, 3vw, 2.7rem);
    margin-top:3rem;
    animation: textAnimation 20s linear infinite;

}
@keyframes textAnimation {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
.categories-container{
display:grid;
grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
margin-top:6rem;
}

`