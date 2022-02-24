import sportsData from '../../data/sportsData'
 
import { Card } from 'antd';

const { Meta } = Card;

export default function Sports() {
    console.log(sportsData)
    const displayData = sportsData.map((data) => {
        return (

            <Card
                key={data.id}
                hoverable
                style={{ width: 240}}
                cover={<img alt="example" src={data.imageSrc} />}
            >
                <Meta title={data.title}  />
            </Card>

            
        )
    })
    return(
        <div>
        <p>sports</p>
        {displayData}
        </div>
    )
}