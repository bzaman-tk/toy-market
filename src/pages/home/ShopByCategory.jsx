import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                const result = []
                data.map(x => {
                    if (x.categorys === 'Guns' || x.categorys === 'Minions' || x.categorys === 'humanlike') {
                        result.push(x);
                    }
                })
                setToys(result)
            })
    }, [])
    console.log(toys);

    const humanlikeData = <TabPanel>
        {
            toys.map((x) =>
                <span key={x._id}>
                    {
                        x.categorys == 'humanlike' ?
                            <>{x.name} <br /></>
                            : ' '
                    }
                </span>
            )
        }
    </TabPanel>;
    const minionsData = <TabPanel>
        {
            toys.map((x) =>
                <span key={x._id}>
                    {
                        x.categorys == 'Minions' ?
                            <>{x.name} <br /></>
                            : ' '
                    }
                </span>
            )
        }
    </TabPanel>;
    const gunsData = <TabPanel>
        {
            toys.map((x) =>
                <span key={x._id}>
                    {
                        x.categorys == 'Guns' ?
                            <>{x.name} <br /></>
                            : ' '
                    }
                </span>
            )
        }
    </TabPanel>;

    return (
        <div className='mt-20'>
            <div className="mb-12 text-center w-1/3 mx-auto mt-20">
                <h2 className="text-3xl font-extrabold">Shop By Category</h2>
                <p className="mt-3 text-center">Welcome to our enchanting toy shop, where imagination comes alive! </p>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Humanlike</Tab>
                    <Tab>Minions</Tab>
                    <Tab>Guns</Tab>
                </TabList>
                {humanlikeData}
                {minionsData}
                {gunsData}
            </Tabs>
        </div>
    );
};

export default ShopByCategory;