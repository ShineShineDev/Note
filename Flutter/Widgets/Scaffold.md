### Scaffold Widget

> package:flutter/src/material/scaffold.dart

| Name                           | Type                          | Default Value           |
| ------------------------------ | ----------------------------- | ----------------------- |
| key                            | Key?                          |                         |
| ppBar                          | PreferredSizeWidget?          |                         |
| body                           | Widget                        |                         |
| floatingActionButton           | Widget?                       |                         |
| floatingActionButtonLocation   | FloatingActionButtonLocation? |                         |
| floatingActionButtonAnimator   | FloatingActionButtonAnimator? |                         |
| persistentFooterButtons        | List<Widget>?                 |                         |
| drawer                         | Widget?                       |                         |
| onDrawerChanged                | void Function(bool)?          |                         |
| endDrawer                      | Widget?                       |                         |
| onEndDrawerChanged             | void Function(bool)?          |                         |
| bottomNavigationBar            | Widget?                       |                         |
| bottomSheet                    | Widget?                       |                         |
| backgroundColor                | Color?                        |                         |
| resizeToAvoidBottomInset       | bool?                         |                         |
| primary                        | bool                          | true                    |
| drawerDragStartBehavior        | DragStartBehavior             | DragStartBehavior.start |
| extendBody                     | bool                          | false                   |
| extendBodyBehindAppBar         | bool                          | false                   |
| drawerScrimColor               | Color?                        |                         |
| drawerEdgeDragWidth            | double?                       |                         |
| drawerEnableOpenDragGesture    | bool                          | true                    |
| endDrawerEnableOpenDragGesture | bool                          | true                    |
| restorationId                  | String?                       |                         |



```dart
(new) Scaffold Scaffold({
  Key? key,
  PreferredSizeWidget? appBar,
  Widget? body,
  Widget? floatingActionButton,
  FloatingActionButtonLocation? floatingActionButtonLocation,
  FloatingActionButtonAnimator? floatingActionButtonAnimator,
  List<Widget>? persistentFooterButtons,
  Widget? drawer,
  void Function(bool)? onDrawerChanged,
  Widget? endDrawer,
  void Function(bool)? onEndDrawerChanged,
  Widget? bottomNavigationBar,
  Widget? bottomSheet,
  Color? backgroundColor,
  bool? resizeToAvoidBottomInset,
  bool primary = true,
  DragStartBehavior drawerDragStartBehavior = DragStartBehavior.start,
  bool extendBody = false,
  bool extendBodyBehindAppBar = false,
  Color? drawerScrimColor,
  double? drawerEdgeDragWidth,
  bool drawerEnableOpenDragGesture = true,
  bool endDrawerEnableOpenDragGesture = true,
  String? restorationId,
})
package:flutter/src/material/scaffold.dart
```















