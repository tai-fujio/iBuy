export const searchProducts = searchInput => 
$.ajax({
   method: "GET",
   url: "api/products",
   data: {
      search: searchInput
   }
})