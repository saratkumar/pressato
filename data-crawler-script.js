products = []
prods = $(".prod-sec")
prods.each((i, prod)=>{
 var product = {}
 product = {
     logo: $(prod).find('img')[0].src,
     name: $(prod).find('.woocommerce-loop-product__title')[0].innerText,
     code: $(prod).find('.woocs_price_code')[0].innerText,
     symbol: $(prod).find('.woocommerce-Price-currencySymbol')[0].innerText,
     price: $(prod).find('.woocommerce-Price-amount')[0].innerText.split("₹ ")[1],
     quantity: $($(prod).find('.woocommerce-product-details__short-description')[0]).find('h6')[0].innerText.split('ml')[0],
     measuringUnit: 'ml',
     ingredient: $($(prod).find('.woocommerce-product-details__short-description')[0]).find('p')[0].innerText
 }
 products.push(product)
})