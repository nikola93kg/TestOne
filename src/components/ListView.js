import React, { useState, useEffect, Suspense, lazy } from 'react'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import Loading from './layout/Loading'
import './ListView.css'

// const client = axios.create({
//     baseURL: "https://api.github.com/gists/public?page=2&per_page=30"
// });

const SingleViewLazy = lazy(() => import('./SingleView'))

function ListView() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [pageCount, setPageCount] = useState(2)
    const [dataPerPage] = useState(30)

    let limit = dataPerPage

    useEffect(() => {

        const getData = async () => {
            setIsLoading(true)
            const response = await fetch(`https://api.github.com/gists/public?page=${pageCount}&per_page=${limit}`)
            const result = await response.json()
            const total = response.headers.get('x-total-count') //nema nista u headers
            setPageCount(Math.ceil(total / limit))
            setData(result)
            setIsLoading(false)
        }

        getData();
    }, [limit]);

    const fetchData = async (currentPage) => {
        const res = await fetch(
            `https://api.github.com/gists/public?page=${currentPage}&per_page=${pageCount}`
        );
        const data = await res.json()
        return data;
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1
        // setIsLoading(true)
        const dataFromApi = await fetchData(currentPage)
        setData(dataFromApi)
        window.scrollTo(0, 0)
        // setIsLoading(false)
    };

    const handleClick = (e) => {
        e.currentTarget.classList.toggle('active')
        e.currentTarget.classList.toggle('pressed')
        console.log(e.currentTarget)
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <Suspense>
            <div className="list-container">
                {data.map((item) => {
                    const { files } = item

                    const fileNameArr = []

                    for (const key in files) {
                        const file = {
                            id: key,
                            ...files[key]
                        }
                        fileNameArr.push(file)
                    }
                    const zavrzlamaItem = fileNameArr.map(file => {
                        return file.filename
                    })

                    return <SingleViewLazy
                        key={item.id}
                        img={item.owner.avatar_url}
                        fileName={zavrzlamaItem}
                        isLoading={isLoading}
                        handleClick={handleClick}
                        id={item.id}
                    />
                })}
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    pageCount={37}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />
            </div>

        </Suspense>

    )
}

export default ListView