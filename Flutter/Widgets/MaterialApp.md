### MaterialApp Widget

> `package:flutter/src/material/app.dart`



| Name                          | Type                                               | Default                       | *    |
| ----------------------------- | -------------------------------------------------- | ----------------------------- | ---- |
| key                           | Key?                                               |                               |      |
| navigatorKey                  | GlobalKey<NavigatorState>?                         |                               |      |
| scaffoldMessengerKey,         | GlobalKey<ScaffoldMessengerState>?                 |                               |      |
| home                          | Widget?                                            |                               |      |
| routes                        | Map<String, Widget Function(BuildContext)>         | <String, WidgetBuilder>{}     |      |
| initialRoute,                 | String?                                            |                               |      |
| onGenerateRoute               | Route<dynamic>? Function(RouteSettings)?           |                               |      |
| onGenerateInitialRoutes       | List<Route<dynamic>> Function(String)?             |                               |      |
| onUnknownRoute                | Route<dynamic>? Function(RouteSettings)?           |                               |      |
| navigatorObservers            | List<NavigatorObserver>                            | <NavigatorObserver>[],        |      |
| builder                       | Widget Function(BuildContext, Widget?)?            |                               |      |
| title                         | String                                             |                               |      |
| onGenerateTitle               | String Function(BuildContext)?                     |                               |      |
| color,                        | Color?                                             |                               |      |
| theme                         | ThemeData?                                         |                               |      |
| darkTheme                     | ThemeData?                                         |                               |      |
| highContrastTheme             | ThemeData?                                         |                               |      |
| highContrastDarkTheme         | ThemeData?                                         |                               |      |
| themeMode = ThemeMode.system  | ThemeMode?                                         |                               |      |
| locale                        | Locale?                                            |                               |      |
| localizationsDelegates        | Iterable<LocalizationsDelegate<dynamic>>?          |                               |      |
| localeListResolutionCallback  | Locale? Function(List<Locale>?, Iterable<Locale>)? |                               |      |
| localeResolutionCallback      | Locale? Function(Locale?, Iterable<Locale>)?       |                               |      |
| supportedLocales              | Iterable<Locale>                                   | <Locale>[Locale('en', 'US')], |      |
| debugShowMaterialGrid         | bool                                               | false                         |      |
| showPerformanceOverlay        | bool                                               | false                         |      |
| checkerboardRasterCacheImages | bool                                               | false                         |      |
| checkerboardOffscreenLayers   | bool                                               | false                         |      |
| showSemanticsDebugger         | bool                                               | false                         |      |
| debugShowCheckedModeBanner    | bool                                               | true                          |      |
| shortcuts                     | Map<ShortcutActivator, Intent>?                    |                               |      |
| actions                       | Map<Type, Action<Intent>>?                         |                               |      |
| restorationScopeId            | String?                                            |                               |      |
| scrollBehavior                | ScrollBehavior?                                    |                               |      |
| useInheritedMediaQuery        | bool                                               | false                         |      |





```dart
(new) MaterialApp MaterialApp({
  Key? key,
  GlobalKey<NavigatorState>? navigatorKey,
  GlobalKey<ScaffoldMessengerState>? scaffoldMessengerKey,
  Widget? home,
  Map<String, Widget Function(BuildContext)> routes = const <String, WidgetBuilder>{},
  String? initialRoute,
  Route<dynamic>? Function(RouteSettings)? onGenerateRoute,
  List<Route<dynamic>> Function(String)? onGenerateInitialRoutes,
  Route<dynamic>? Function(RouteSettings)? onUnknownRoute,
  List<NavigatorObserver> navigatorObservers = const <NavigatorObserver>[],
  Widget Function(BuildContext, Widget?)? builder,
  String title = '',
  String Function(BuildContext)? onGenerateTitle,
  Color? color,
  ThemeData? theme,
  ThemeData? darkTheme,
  ThemeData? highContrastTheme,
  ThemeData? highContrastDarkTheme,
  ThemeMode? themeMode = ThemeMode.system,
  Locale? locale,
  Iterable<LocalizationsDelegate<dynamic>>? localizationsDelegates,
  Locale? Function(List<Locale>?, Iterable<Locale>)? localeListResolutionCallback,
  Locale? Function(Locale?, Iterable<Locale>)? localeResolutionCallback,
  Iterable<Locale> supportedLocales = const <Locale>[Locale('en', 'US')],
  bool debugShowMaterialGrid = false,
  bool showPerformanceOverlay = false,
  bool checkerboardRasterCacheImages = false,
  bool checkerboardOffscreenLayers = false,
  bool showSemanticsDebugger = false,
  bool debugShowCheckedModeBanner = true,
  Map<ShortcutActivator, Intent>? shortcuts,
  Map<Type, Action<Intent>>? actions,
  String? restorationScopeId,
  ScrollBehavior? scrollBehavior,
  bool useInheritedMediaQuery = false,
})
```

