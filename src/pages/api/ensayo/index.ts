import { db } from "~/server/db";
import { NextApiRequest, NextApiResponse } from 'next'
import { Prueba } from "@prisma/client";





export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
  const body: any = (req.body)
  console.log('====================================');
  console.log(body.sigma);
  console.log('====================================');

  const {data} = body

      switch (req.method) {
        case "POST":
          
      if (body) {

        try {
          
            const ensayo:Prueba =  await db.prueba.create({
              data: {
                sigma: parseFloat(body.sigma),
              }
            })
            console.log('==================================== ensayo api');
            console.log(ensayo);
            console.log('====================================');

            return res.status(200).json(ensayo)
          
        } catch (error) {
          return res.status(400).json({message:error})
        }
      }
      return res.status(400).json({message: "body not recieved"})
      case "PATCH":
      // const {id} = JSON.parse(body)
      // if (data) {
      //   try {
      //     const factura:Factura =  await prisma.factura.update({
      //       where:{id: id},
      //       data
      //     })
      //     console.log('==================================== factura api');
      //     console.log(factura);
      //     console.log('====================================');
      //     return res.status(200).json(factura)
      //   } catch (error) {
      //     console.log(error);
          
      //     return res.status(400).json({message:error})
      //   }
      // }
      return res.status(200).json({message: "body not reciebed"})
         
    
    
      
        default:
          break;
      }
       
    
    
    
  }