import PropTypes from 'prop-types'
import * as React from "react"

const Badge = ({ children }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
    {children}
  </span>
)

export const ListingItem = (props) => {
  const [isDeleting, setIsDeleting] = React.useState(false)

  return (
    <div className="relative flex flex-col">
      <div className="group block w-full rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-pink-500 overflow-hidden">
        <img
          src={props.imageUrl}
          alt=""
          className="object-cover pointer-events-none group-hover:opacity-75 h-48 w-full"
        />
      </div>
      <div className="flex-1 flex md:flex-col justify-between items-start md:items-stretch gap-3 px-2">
        <div className="mt-1 flex-1">
          <div className="flex justify-between items-center gap-3">
            <div>
              RM <span className="text-2xl font-bold">{props.price}</span>
            </div>
          </div>
          <p className="block text-sm font-medium text-gray-900 truncate pointer-events-none">
            {props.title}
          </p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">
            {props.description}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 py-3">
          {props.onAddToCart ? (
            <button variant="primary" onClick={props.onAddToCart}>Add to Cart</button>
          ) : (
            <>
              <button>Edit</button>
              <button
                text={isDeleting ? "DELETING..." : "DELETE"}
                onClick={() => setIsDeleting(!isDeleting)}
              >Delete</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

ListingItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  /**
   * Required if `onlyOne` is `false`.
   */
  availableStock: PropTypes.number,
  onlyOne: PropTypes.bool,
}
