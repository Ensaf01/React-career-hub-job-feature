import { useEffect, useState } from "react";

const Category = () => {
    const [categoriess, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className="mt-10 ">
            <div className="  p-2 rounded-lg ">
                <h1 className="text-4xl font-bold text-center">Job Category</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8 ">
                    {
                        categoriess.map(categories =>
                            <span key={categories.id}>
                                <div className="border-2 bg-purple-200 p-7 rounded-lg grid gap-4 mb-10">
                                    <img src={categories.logo} alt="" />
                                    <h1 className="font-bold text-2xl">{categories.category_name}</h1>
                                    <h1>{categories.availability}</h1>
                                </div>
                            </span>)

                    }

                </div>
            </div>

        </div>

    );
};

export default Category;