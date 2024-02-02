import styled from "styled-components";

function RnR({ question, answer }) {
  return (
    
    
       
    <Faq>
     
      <Summary>{question}</Summary>
      <Answer>{answer}</Answer>
    </Faq>
   
  );
}

const Faq = styled.details`
  font-size: 1rem;
  background-color: rgb(151, 95, 255);

  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  margin: 2% 25%  5% 25% ;
  
  border-radius: 30px;
  @media (max-width: 900px) {
    margin: 0 8% 10% 8%;
    font-size: .75em;
  }

`;

const Summary = styled.summary`

  cursor: pointer;
  padding: 1rem 2rem;
  outline-offset: 5px;
  color: #333;
  font-family: "Adieu Regular";
  letter-spacing: 0.1em; 
  font-weight: 800;
 
`;

const Answer = styled.div`
border-top: 1px solid #333;
 font-size:1rem;
  border-radius: 0 0 30px 30px;
  padding: 2rem 2rem;
  font-style: italic;
  color: #fff;
  font-weight: 600;
  gap:0.1em;
  letter-spacing: 1px;
`;

export default RnR;
