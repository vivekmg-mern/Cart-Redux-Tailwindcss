import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'


const Home = () => {
  const dispatch = useDispatch()
  const {allProducts, loading, errorMsg} = useSelector(state=>state.productReducer)
console.log(allProducts, loading, errorMsg);

// Pagination
const [currentPage, setCurrentPage] = useState(1)
const productsPerPage = 8
const totalPages = Math.ceil(allProducts?.length/productsPerPage)
const currentPageProductLastIndex = currentPage * productsPerPage //8,16
const currentPageProductFirstIndex = currentPageProductLastIndex - productsPerPage // 8-8=0, 16-8=8
const visibleAllProducts = allProducts?.slice(currentPageProductFirstIndex, currentPageProductLastIndex)


  useEffect(()=>{
    dispatch(fetchProducts())
  }, [])

const navigateToNextPage = ()=>{
  if(currentPage!=totalPages){
    setCurrentPage(currentPage+1)
  }
}


const navigateToPrevPage = ()=>{
  if(currentPage!=1){
    setCurrentPage(currentPage-1)
  }
}


  return (
  <>
  <Header insideHome={true}/>
  <div className='container px-4 mx-auto' style={{paddingTop:'100px'}} >
{
loading?
<div className='flex justify-center item-center my-5 text-2xl'>
<img width={'70px'} height={'70px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7PerHXlArRw04avvnh7VWcinQf2kJqQXyZA&s" alt="" />
Loading....
</div>
:
<>
<div className='grid grid-cols-4 gap-4'>
      {
allProducts?.length>0?
visibleAllProducts?.map(product=>(

<div className='rounded border p-2 shadow'>
      <img height={'200px'} width={'100%'} src={product?.thumbnail} alt="" />
      <div className='text-center'>
        <h3 className='text-xl font-bold'>{product?.title}</h3>
        <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block' >View More....</Link>
      </div>
  </div>
))
:
<div className='flex justify-center items-center font-bold text-red-600 my-5 text-lg'>
Products Not Found!!!!
</div>
      }
    </div>
</>
}
  </div>
  {/* Pagination */}
  <div className='text-2xl text-center mt-20' >
    <span onClick={navigateToPrevPage} className='cursor-pointer'><i className='fa-solid fa-backward me-5' ></i></span>
    <span>{currentPage} of {totalPages}</span>
    <span onClick={navigateToNextPage} className='cursor-pointer'><i className='fa-solid fa-forward ms-5'></i></span>
  </div>
  </>
  )
}

export default Home