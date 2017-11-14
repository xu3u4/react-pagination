import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { updateQueryString } from 'js/utils'
import Pagination from 'js/components/pagination/pagination'

class PagesContainer extends Component {
  changePage (p, disableClick) {
    if (disableClick) return false
    updateQueryString({p})
  }

  render () {
    return (
      <Pagination
        paginate={this.props.paginate}
        handleChangePage={this.changePage}
      />
    )
  }
}

PagesContainer.propTypes = {
  paginate: PropTypes.shape({
    items_per_page: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  })
}

export default PagesContainer
