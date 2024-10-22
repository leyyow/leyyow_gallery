import axios from "axios"
import * as urls from "./urls"

export const fetchProducts = (slug) => {
	return axios({
		method: "get",
		url: `${urls.fetchProductsUrl}${slug}/`,
		// data,
	})
}
export const updateCustomer = (data, id) => {
  return axios({
    method: "patch",
    url: `${urls.updateCustomerUrl}${id}/`,
    data,
  })
}