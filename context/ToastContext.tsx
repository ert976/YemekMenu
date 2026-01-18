import React, {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useState,
} from "react";
import { Animated, Platform, StyleSheet, Text } from "react-native";

type ToastType = "success" | "error" | "info";

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
  showError: (message: string) => void;
  showSuccess: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<ToastType>("info");
  const [fadeAnim] = useState(new Animated.Value(0));

  const showToast = useCallback(
    (msg: string, type: ToastType = "info") => {
      setMessage(msg);
      setType(type);
      setVisible(true);

      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: Platform.OS !== "web",
        }),
        Animated.delay(3000),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: Platform.OS !== "web",
        }),
      ]).start(() => setVisible(false));
    },
    [fadeAnim],
  );

  const showError = (msg: string) => showToast(msg, "error");
  const showSuccess = (msg: string) => showToast(msg, "success");

  return (
    <ToastContext.Provider value={{ showToast, showError, showSuccess }}>
      {children}
      {visible && (
        <Animated.View
          style={[
            styles.container,
            { opacity: fadeAnim },
            type === "error" && styles.error,
            type === "success" && styles.success,
          ]}
        >
          <Text style={styles.text}>{message}</Text>
        </Animated.View>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: "#333",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 9999,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  error: {
    backgroundColor: "#EF4444",
  },
  success: {
    backgroundColor: "#10B981",
  },
});
