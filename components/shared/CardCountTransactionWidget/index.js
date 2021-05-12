import CardCountTransactionWidgetStc from './CardCountTransactionWidget.stc';
import { FaUserFriends } from "react-icons/fa";
import {Row,Col} from 'reactstrap';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { FaRegCreditCard } from "react-icons/fa";
import TestContext from '../../../ContextAPI/TestContext';
import { useContext } from 'react';

export const LISTE_TRANSACTION_BOX=gql`
query
{
  transactions(where:{paid:true})
  { 
  	id
    date_save
  }
}
`;

export const LISTE_TRANSACTION_TOTAL=gql`
query
{
  transactions
  { 
  	id
    
  }
}
`;

const CardCountTransactionWidget =(props)=>{

  const filtre = useContext(TestContext);

    const {data,error,loading}=useQuery(LISTE_TRANSACTION_BOX);
    const res=useQuery(LISTE_TRANSACTION_TOTAL);

    if(error) { return <p>Erreur</p>}
    if(error) { return <p>Chargement ...</p>}
    const countTransaction=data?.transactions?.length;
    const countTransactionTotal=res?.data?.transactions?.length;

    let body = [];
    var date1=filtre.date;

    if(data)
    {
      for (let index = 0; index < data.transactions.length; index++) {
        var date_save=data?.transactions[index]?.date_save;
        if(date_save!==null)
        {
      
          if(filtre.type===0)
          {
            if(date_save===date1)
            {
              // console.log("trouvé")
              body.push(
                {
                  id:data?.transactions[index]?.id
                }
              )
            }
          }

          else if(filtre.type===1)
          {
            var sub=date_save.split("-");
            var nd=sub[1]+"-"+sub[0] 
            // console.log(date1)
            if(nd===date1)
            {
              // console.log("trouvé")
              body.push(
                {
                  id:data?.transactions[index]?.id
                }
              )
            }
          }

          else if(filtre.type===2)
          {
            var sub=date_save.split("-");
            var nd=sub[0]
            if(nd==date1)
            {
              body.push(
                {
                  id:data?.transactions[index]?.id
                }
              )
            }
          }
          else
          {
            if(date_save==date1)
            {
              body.push(
                {
                  id:data?.transactions[index]?.id
                }
              )
            }
          }
          
        }
       
      }
    } 

    return(
        <CardCountTransactionWidgetStc>
            <Row>
                <Col sm={4} className="col-4">
                    <span className="spanIcon"><FaRegCreditCard /></span>
                </Col>
                <Col sm={8} className="col-8">
                    <h4>Transactions payées </h4>
                    <h2>{body.length}</h2>
                    <p className="action">Sur  <span action> {countTransactionTotal} </span> au total</p>
                </Col>
            </Row>
        </CardCountTransactionWidgetStc>
    )
}
export default CardCountTransactionWidget;