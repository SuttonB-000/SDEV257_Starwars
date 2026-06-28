import React from 'react';
import PropTypes from 'prop-type';
import { text, FlatList } from 'react-native';
import styles from './styles';
import ListControls from '.ListControls';

// List component 
export default function List({ Controls,data, onFilter, onSort, asc }) {
  return (
  <FlatList data={data} ListHeaderComponent={<Controls {...{ onFilter, onSort, asc }} />}
  );  
}

List.propTypes = {
  Controls: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
};
List.defaultProps = {
  Controls: ListControls,
};
