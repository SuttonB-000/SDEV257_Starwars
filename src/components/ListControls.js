import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "../../styles.js";
import ListFilter from "./ListFilter.js";
import ListSort from "./ListSort";

export default function ListControl({ onFilter, onSort, asc }) {
  return (
    <View style={style.control}>
      <ListFilter onFilter={onFilter} />
      <ListSort onSort={onSorct} asc={asc} />
    </View>
  );
}
ListControl.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
};
