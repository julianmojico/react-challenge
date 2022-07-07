import { useEffect, useState } from 'react';
import Data from '../resources/data/data.js';

const useSearchData = () => {

    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(Data.influencers);
    }, []);

    function handleSearch(input) {

        const searchText = input.toLowerCase();
        const result = Data.influencers.filter((influencer) => {
            if (!searchText) {
                return influencer;
            }
            else {
                const descriptionMatch = influencer.description.toLowerCase().includes(searchText);
                const nameMatch = influencer.name.toLowerCase().includes(searchText)
                return (nameMatch || descriptionMatch);
            }

        })
        setFilteredData(result);

    }
    return [filteredData, handleSearch]

}


export { useSearchData };