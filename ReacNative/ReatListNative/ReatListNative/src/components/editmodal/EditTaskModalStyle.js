import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: "#0f1c2e",
    borderRadius: 16,
    padding: 20,
    width: "100%",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 14,
    fontFamily: "monospace",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 16,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#555",
  },
  cancelText: {
    color: "#aaa",
    fontWeight: "600",
  },
  saveButton: {
    backgroundColor: "#6fae6f",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  saveText: {
    color: "#fff",
    fontWeight: "600",
  },
});