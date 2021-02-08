import { useLocalStore } from "mobx-react-lite";

export function useContextMenu() {
  const dataMenu = useLocalStore(() => {
    return {
      visible: false,
      onVisibleChange(state: boolean) {
        this.visible = state;
      },
      items: [],
    };
  });

  return dataMenu;
}
