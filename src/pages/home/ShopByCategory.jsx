import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopByCard from './ShopByCard';

const ShopByCategory = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('https://toyserver-one.vercel.app/toys')
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
    // console.log(toys);

    const humanlikeData = <TabPanel>
        <div className="sm:grid sm:grid-cols-3 gap-5 pt-5">
            {
                toys.map((x) =>
                    x.categorys == 'humanlike' ?
                        <ShopByCard key={x._id} data={x} />
                        : ' '
                )
            }
        </div>
    </TabPanel>;
    const minionsData = <TabPanel>
        <div className="sm:grid sm:grid-cols-3 gap-5 pt-5">
            {
                toys.map((x) =>
                    x.categorys == 'Minions' ?
                        <ShopByCard key={x._id} data={x} />
                        : ' '
                )
            }
        </div>
    </TabPanel>;
    const gunsData = <TabPanel>
        <div className="sm:grid sm:grid-cols-3 gap-5 pt-5">
            {
                toys.map((x) =>
                    x.categorys == 'Guns' ?
                        <ShopByCard key={x._id} data={x} />
                        : ' '
                )
            }
        </div>
    </TabPanel>;

    return (
        <div className='mt-20'>
            <div className="mb-12 text-center sm:w-1/3 mx-auto sm:mt-20">
                <h2 className="text-3xl font-extrabold">Shop By Category</h2>
                <p className="mt-3 text-center">Welcome to our enchanting toy shop, where imagination comes alive! </p>
            </div>
            <Tabs>
                <TabList className='react-tabs__tab-list text-center'>
                    <Tab>Guns</Tab>
                    <Tab>Humanlike</Tab>
                    <Tab>Minions</Tab>
                </TabList>
                {gunsData}
                {humanlikeData}
                {minionsData}
            </Tabs>
        </div>
    );
};

export default ShopByCategory;