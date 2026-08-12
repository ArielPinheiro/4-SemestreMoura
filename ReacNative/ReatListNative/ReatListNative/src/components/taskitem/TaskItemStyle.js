import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0f1c2e",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  text: {
    color: "#8fa3b8",
    fontFamily: "monospace",
    fontSize: 15,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
  editButton: {
    borderWidth: 1,
    borderColor: "#4fa3d1",
    borderRadius: 8,
    padding: 6,
  },
  deleteButton: {
    borderWidth: 1,
    borderColor: "#e05a5a",
    borderRadius: 8,
    padding: 6,
  },
});