import { TranslationSet } from "./translation-set";

export const koreanTranslationSet: TranslationSet = {
    trayIconShow: "보이기",
    trayIconSettings: "설정",
    trayIconQuit: "종료",

    userConfirmationProceed: "진행?",

    noSearchResultsFoundDescription: "",
    noSearchResultsFoundTitle: "검색 결과를 찾을 수 없습니다.",

    refreshingIndexesPending: "인덱스 갱신 중",

    ueliCommandClearCaches: "캐시 초기화",
    ueliCommandClearCachesDescription: "모든 플러그인의 모든 캐시를 초기화합니다.",
    ueliCommandEditSettingsFile: "설정 파일 수정",
    ueliCommandEditSettingsFileDescription: "기본 텍스트 편집기로 설정 파일을 수정할 수 있습니다.",
    ueliCommandExit: "나가기",
    ueliCommandExitDescription: "ueli 앱을 나갑니다",
    ueliCommandOpenSettings: "설정",
    ueliCommandOpenSettingsDescription: "설정을 변경할 수 있습니다.",
    ueliCommandRefreshIndexes: "인덱스 갱신",
    ueliCommandRefreshIndexesDescription: "모든 플러그인의 모든 인덱스를 갱신합니다.",
    ueliCommandReload: "다시 로드",
    ueliCommandReloadDescription: "ueli 다시 로드",

    generalErrorTitle: "오류가 발생하였습니다",
    generalErrorDescription: "로그에서 더 많은 정보를 확인하세요.",

    successfullyRefreshedIndexes: "인덱스 갱신 완료",
    successfullyClearedCaches: " 캐시 초기화 완료",
    successfullyUpdatedconfig: "설정을 변경했습니다",
    successfullyClearedExecutionLog: "실행 로그를 지웠습니다",

    commandlineSearchResultDescription: "{{command}} 실행",

    noFavoritesFoundDescription: "실행 로그가 비어있습니다.",
    noFavoritesFoundTitle: "즐겨찾기 없음",

    // settings
    settings: "설정",

    generalSettingsMenuSection: "일반",
    pluginSettingsMenuSection: "플러그인",

    generalSettings: "일반",
    generalSettingsLanguage: "언어",
    generalSettingsLogExecution: "실행 로그",
    generalSettingsPersistentUserInput: "사용자 입력 유지",
    generalSettingsAutostartApp: "시스템 시작 시 어플리케이션 자동 시작",
    generalSettingsShowTrayIcon: "트레이 아이콘 보이기",
    generalSettingsClearCachesOnExit: "종료 시 캐시 초기화",
    generalSettingsHotKey: "단축키",
    generalSettingsRescanIntervalEnabled: "정기적인 재 스캔 활성화",
    generalSettingsRescanInterval: "재 스캔 간격 (초 단위)",
    generalSettingsShowAlwaysOnPrimaryDisplay: "항상 주 모니터에 표시하기",
    generalSettingsRememberWindowPosition: "현재 창 위치 기억하기",
    generalSettingsExportSettings: "현재 설정 내보내기",
    generalSettingsSuccessfullyExportedSettings: "성공적으로 설정을 내보냈습니다",
    generalSettingsImportSettings: "설정 불러오기",
    generalSettingsImportFileFilterJsonFiles: "JSON 파일",
    generalSettingsImportErrorInvalidConfig: "설정 가져오기 실패: 파일 내용이 올바르지 않은 것 같습니다.",
    generalSettingsResetAllSettings: "모든 설정 기본으로 재설정",
    generalSettingsResetWarning: "모든 일반 설정을 기본값으로 재설정하려고 합니다. 계속하시겠습니까?",
    generalSettingsResetAllSettingsWarning: '"모든" 설정을 기본값으로 재설정하려고 합니다. 계속하시겠습니까?',
    generalSettingsClearExecutionLogWarning: "실행 로그를 지우려고 합니다. 계속하시겠습니까?",
    generalSettingsHideMainWindowAfterExecution: "실행한 후 창을 숨기기",
    generalSettingsHideMainWindowOnBlur: "포커싱이 해제 된 경우 창을 숨기기",
    generalSettingsDecimalSeparator: "소숫점 구분자",
    generalSettingsCheckingForUpdate: "업데이트를 사용할 수 있는지 확인하는 중",
    generalSettingsDownloadUpdate: "업데이트 다운로드",
    generalSettingsDownloadingUpdate: "업데이트 다운로드 중",
    generalSettingsLatestVersion: "현재 최신 버전을 사용하고 있습니다!",
    generalSettingsErrorWhileCheckingForUpdate: "업데이트를 확인하던 도중 문제가 발생했습니다",
    clearExecutionLog: "실행 로그 초기화",
    openDebugLog: "디버그 로그 열기",
    openTempFolder: "임시 폴더 열기",

    hotkeyKeyBackspace: "Backspace",
    hotkeyKeyDelete: "Delete",
    hotkeyKeyDown: "Down",
    hotkeyKeyEnd: "End",
    hotkeyKeyEscape: "Escape",
    hotkeyKeyHome: "Home",
    hotkeyKeyInsert: "Insert",
    hotkeyKeyLeft: "Left",
    hotkeyKeyPageDown: "PageDown",
    hotkeyKeyPageUp: "PageUp",
    hotkeyKeyPlus: "Plus",
    hotkeyKeyReturn: "Return",
    hotkeyKeyRight: "Right",
    hotkeyKeySpace: "Space",
    hotkeyKeyTab: "Tab",
    hotkeyKeyUp: "Up",
    hotkeyModifierAlt: "Alt",
    hotkeyModifierAltGr: "AltGr",
    hotkeyModifierCommand: "Cmd",
    hotkeyModifierControl: "Ctrl",
    hotkeyModifierOption: "Option",
    hotkeyModifierShift: "Shift",
    hotkeyModifierSuper: "Super",

    appearanceSettings: "표시",
    appearanceSettingsWindowWidth: "창 넓이 (픽셀 단위)",
    appearanceSettingsMaxSearchResultsPerPage: "페이지 당 최대 검색 결과",
    appearanceSettingsSearchResultHeight: "검색 결과 높이 (픽셀 단위)",
    appearanceSettingsSmoothScrolling: "부드러운 스크롤",
    appearanceSettingsUserInputHeight: "사용자 입력 높이 (픽셀 단위)",
    appearanceSettingsShowDescriptionOnAllSearchResults: "모든 검색 결과에 설명 표시",
    appearanceSettingsShowSearchIcon: "검색 필드에 검색 아이콘 표시",
    appearanceSettingsShowSearchResultNumbers: "검색 결과 숫자 표시",
    appearanceSettingsResetWarningMessage: "모든 표시 설정을 기본값으로 재설정하려고 합니다. 계속하시겠습니까?",
    appearanceSettingsAllowTransparentBackground: "투명한 배경 허용",
    appearanceSettingsFontFamily: "글꼴",
    appearanceSettingsUserInputBorderRadius: "사용자 입력 둥글기",
    appearanceSettingsUserInputBottomMargin: "사용자 입력 하단 여백 (픽셀 단위)",
    appearanceSettingsSearchResultsBorderRadius: "검색 결과 둥글기",
    appearanceSettingsScrollbarBorderRadius: "스크롤 바 둥글기",
    appearanceSettingsBorderRadiusDescription:
        "이것은 css 값이기 때문에, '10px'처럼 'px'를 추가해야 합니다. 또한 각각의 코너는 '10px 0px 10px 5px'처럼 지정할 수 있습니다.",
    appearanceSettingsUserInputFontWeight: "User Input Font Weight",
    appearanceSettingsSearchResultNameFontWeight: "Search result name font weight",
    appearanceSettingsSearchResultDescriptionFontWeight: "Search result description font weight",
    appearanceSettingsUserInputFontSize: "User input font size",
    appearanceSettingsSearchResultDescriptionFontSize: "Search result name font size",
    appearanceSettingsSearchResultNameFontSize: "Search result description font size",

    settingsUserInputTitle: "사용자 입력",
    settingsSearchResultsBoxTitle: "검색 결과 박스",
    settingsScrollbarTitle: "스크롤 바",
    settingsGeneralTitle: "일반",

    colorThemeSettings: "색상 테마",
    colorThemeSettingsImportColorTheme: "색상 테마 불러오기",
    colorThemeSettingsExportColorTheme: "색상 테마 가져오기",
    colorThemeSettingsResetWarning: "모든 색상 테마 설정을 기본값으로 재설정하려고 합니다. 계속하시겠습니까?",
    colorThemeExportSucceeded: "색상 테마를 내보냈습니다.",
    colorThemeExportFailed: "색상 테마 내보내기 실패",
    colorThemeImportSucceeded: "색상 테마를 가져왔습니다.",
    colorThemeImportFailed: "색상 테마 가져오기 실패",
    colorThemeInvalidColorTheme: "잘못된 색상 테마",
    colorThemePresets: "프리셋",
    colorthemeUserInputBackgroundColor: "사용자 입력 배경 색",
    colorThemeUserInputTextColor: "사용자 입력 텍스트 색",
    colorThemeSearchResultsBackgroundColor: "검색 결과 배경 색",
    colorThemeSearchResultsItemActiveBackgroundColor: "활성화 된 검색 결과 배경 색",
    colorThemeSearchResultsItemActiveTextColor: "활성화 된 검색 결과 텍스트 색",
    colorThemeSearchResultsItemActiveDescriptionColor: "검색 결과 설명 색",
    colorThemeSearchResutlsItemNameTextColor: "검색 결과 이름 텍스트 색",
    colorThemeSearchResultsItemDescriptionTextColor: "검색 결과 설명 텍스트 색",
    colorThemeScrollbarForegroundColor: "스크롤 바 전경 색",
    colorThemeScrollbarBackgroundColor: "스크롤 바 배경 색",

    colorPicker: "색상 선택",

    applicationSearchSettings: "응용 프로그램 검색",
    applicationSearchSettingsDescription: `이 플러그인은 컴퓨터에서 응용 프로그램을 검색하는 중입니다. 응용 프로그램이 설치된 폴더와 응용 프로그램을 인식하는 데 사용할 파일 확장명을 지정할 수 있습니다.`,
    applicationSearchSettingsApplicationFolders: "응용 프로그램 폴더",
    applicationSearchSettingsApplicationFolder: "응용 프로그램 폴더",
    applicationSearchSettingsFolderPath: "폴더 경로",
    applicationSearchSettingsRemoveAction: "제거",
    applicationSearchSettingsAddApplicationFolder: "응용 프로그램 폴더 추가",
    applicationSearchSettingsApplicationFileExtensions: "응용 프로그램 확장자",
    applicationSearchSettingsApplicationFileExtension: "파일 확장자",
    applicationSearchSettingsAddApplicationFileExtension: "파일 확장자 추가",
    applicationSearchSettingsInvalidFileExtensionErrorMessage: `"{{value}}" 은 올바르지 않은 파일 확장자입니다.`,
    applicationSearchSettingsNotAFolderErrorMessage: `"{{value}} 은 폴더가 아닙니다"`,
    applicationSearchSettingsDoesNotExistErrorMessage: `"{{value}} 은 존재하지 않습니다"`,
    applicationSearchSettingsFolderValidationError: `"{{value}}" 을 검증하던 도중에 문제가 발생하였습니다.`,
    applicationSearchSettingsUseNativeIcons: "네이티브 아이콘 사용 (꺼짐으로 인해 성능이 향상될 수 있습니다.)",

    searchEngineSettings: "검색 엔진",
    searchEngineSettingsDescription: `검색 엔진은 응용 프로그램, 바로 가기 및 운영체제 설정/명령어과 같은 미리 인덱싱된 항목에 사용됩니다.`,
    searchEngineSettingsFuzzyness: "퍼지 검색 강도",
    searchEngineSettingsFuzzynessDescription: "0 = 엄격, 1 = 퍼지",
    searchEngineSettingsStrict: "엄격",
    searchEngineSettingsFuzzy: "퍼지",
    searchEngineSettingsBlacklist: "블랙 리스트",
    searchEngineSettingsMaxSearchResults: "최대 검색 결과",
    searchEngineSettingsResetWarning: "모든 검색 엔진 설정을 기본값으로 재설정하려고 합니다. 계속하시겠습니까?",

    shortcutSettings: "바로가기",
    shortcutSettingsDescription: `이 플러그인을 사용하면 바로 가기를 설정하여 파일 또는 웹 사이트를 빠르게 열 수 있습니다.`,
    shortcutSettingsTableType: "종류",
    shortcutSettingsTableName: "이름",
    shortcutSettingsTableExecutionArgument: "명령 인자",
    shortcutSettingsTableDescription: "설명",
    shortcutSettingsTableTags: "태그",
    shortcutSettingsTableIcon: "아이콘",
    shortcutSettingsTableEdit: "수정",
    shortcutSettingsTableDelete: "삭제",
    shortcutSettingsAddShortcut: "바로가기 추가",
    shortcutSettingsEditModalImageUrl: "이미지 URL",
    shortcutSettingsEditModalSvgString: "SVG 텍스트",
    shortcutSettingsEditModalColor: "색상",
    shortcutSettingsEditModalGoogleWebsite: "구글 사이트",
    shortcutSettingsEditModalDownloadsFolder: "다운로드 폴더",
    shortcutSettingsEditModalCommand: "명령어",
    shortcutSettingsInvalidShortcutErrorMessage: "올바르지 않은 바로가기",
    shortcutSettingsTagPlaceholder: "엔터를 눌러 태그 추가",
    shortcutSettingsTypeUrl: "URL",
    shortcutSettingsTypeCommandlineTool: "명령 행 도구",
    shortcutSettingsEditModalCommandLinetoolDescription: "Visual Studio Code에서 파일 수정",
    shortcutSettingsNeedsUserConfirmation: "실행 전 확인 필요",

    translationSettingsTranslation: "번역",
    translationSettingsDescription: `이 플러그인은 단어나 짧은 문장을 빠르게 번역할 수 있게 해줍니다. Linguee (https://linguee.de)를 위한 비공식 API (https://github.com/imankulov/linguee-api)를 사용하므로 불안정할 수 있습니다.`,
    translationSettingsDebounceDelay: "디바운스 지연 시간 (밀리 초 단위)",
    translationSettingsMinSearchTermLength: "검색어 최소 길이",
    translationSettingsPrefix: "접두어",
    translationSettingsSourceLanguage: "소스 언어",
    translationSettingsTargetLanguage: "대상 언어",

    everythingSearch: "Everything 검색",
    everythingSearchSettingDescription: `이 플러그인을 사용하면 Everything 검색을 사용하여 로컬 파일 시스템에서 파일 및 폴더를 검색할 수 있습니다. 사용하려면 https://www.voidtools.com/downloads/ 에서 "Everything"과 "Everything Commandline Interface"를 설치해야 합니다. 두 가지를 모두 설치한 후 아래의 'es.exe' 경로를 지정해야 합니다.`,
    everythingSearchPathToBinary: `"es.exe" 위치`,
    everythingSearchPrefix: "접두어",
    everythingSearchMaxSearchResults: "최대 검색 결과",
    everythingSearchPathToBinaryFilterName: "실행 가능한 파일",

    mdfindSearch: "mdfind 검색",
    mdfindSettingsDescription:
        "이 플러그인을 사용하면 기본 macOS 검색을 이용하여 로컬 파일 시스템에서 파일 및 폴더를 검색할 수 있습니다.",
    mdfindSearchDebounceDelay: "디바운스 지연 시간 (밀리 초 단위)",
    mdfindSearchPrefix: "접두어",
    mdfindSearchMaxSearchResults: "최대 검색 결과",

    websearch: "웹 검색",
    websearchSettingDescription: `이 플러그인을 사용하면 웹 검색 엔진을 설정하여 즐겨찾는 웹 검색 엔진을 이용해 인터넷을 빠르게 검색할 수 있습니다.`,
    websearchEngines: "웹 검색 엔진들",
    websearchEditingModalTitleAdd: "웹 검색 엔진 추가",
    websearchEditingModalTitleEdit: "웹 검색 엔진 수정",
    websearchName: "이름",
    websearchPrefix: "접두어",
    websearchUrl: "주소",
    websearchSuggestionUrl: "제안되는 주소",
    websearchIcon: "아이콘",
    websearchPriority: "중요도",
    websearchIsFallback: "대비책",
    websearchEncodeSearchTerm: "검색어 인코딩",
    websearchInvalidWebsearchEngine: "올바르지 않은 웹 검색 엔진",
    websearchDescription: `"{{search_term}}"를 {{websearch_engine}} 에서 검색합니다.`,

    fileBrowser: "파일 탐색기",
    fileBrowserSettingsDescription: `이 플러그인을 사용하면 로컬 파일 시스템을 검색할 수 있습니다. 시작하려면 올바른 절대 파일 경로를 입력해야 합니다.`,
    fileBrowserSettingsMaxSearchResults: "최대 검색 결과",
    fileBrowserOptionsShowHiddenFiles: "숨겨진 파일 보이기",
    fileBrowserOptionsBlackList: "블랙 리스트",
    fileBrowserOptionsBlackListPlaceholder: "파일 또는 폴더 이름",

    operatingSystemCommands: "운영체제 명령",
    operatingSystemCommandsSettingsDescription: `운영 체제 명령은 컴퓨터를 종료하거나 다시 시작하는 등 운영 체제를 제어하는 간단한 명령입니다.`,

    operatingSystemSettings: "운영체제 설정",
    operatingSystemSettingsSettingsDescription: "이 플러그인을 사용하면 운영 체제 설정을 신속하게 찾을 수 있습니다.",

    macOsShutdown: "시스템 종료",
    macOsShutdownDescription: "컴퓨터를 종료합니다",
    macOsRestart: "재시동",
    macOsRestartDescription: "컴퓨터를 재시작합니다",
    macOsLogout: "로그아웃",
    macOsLogoutDescription: "현재 사용자 로그아웃",
    macOsSleep: "잠자기",
    macOsSleepDescription: "컴퓨터 잠자기",
    macOsLock: "잠금",
    macOsLockDescription: "컴퓨터 잠금",

    windowsShutdown: "시스템 종료",
    windowsShutdownDescription: "컴퓨터를 종료합니다",
    windowsRestart: "다시 시작",
    windowsRestartDescription: "컴퓨터를 재시작합니다",
    windowsReboot: "재부팅",
    windowsSignout: "로그아웃",
    windowsSignoutDescription: "현재 사용자 로그아웃",
    windowsLock: "잠금",
    windowsLockDescription: "컴퓨터를 잠급니다",
    windowsSleep: "절전",
    windowsSleepDescription: "컴퓨터를 절전 모드로 설정합니다",
    windowsHibernation: "최대 절전 모드",
    windowsHibernationDescription: "컴퓨터를 최대 절전 모드로 설정합니다",

    calcuator: "계산기",
    calculatorCopyToClipboard: "Enter를 눌러 계산 결과를 클립보드에 복사",
    calculatorDescription: "이 플러그인을 사용하면 간단한 계산을 신속하게 수행할 수 있습니다.",
    calculatorPrecision: "정밀도",

    openUrlWithBrowser: "웹 브라우저로 열기",
    url: "URL",
    urlDescription: "이 플러그인을 사용하면 URL을 입력하여 웹 사이트를 빠르게 열 수 있습니다.",
    urlDefaultProtocol: "기본 프로토콜",

    email: "이메일",
    emailSettingsDescription: "이 플러그인을 사용하면 이메일 주소를 입력하여 빠르게 이메일을 작성할 수 있습니다.",
    openNewMail: "새 이메일 작성하기",

    currencyConverter: "통화 변환기",
    currencyConverterDescription:
        "이 플러그인을 사용하면 통화를 빠르게 변환할 수 있습니다. 최신 환율은 https://exchangeratesapi.io/ 에서 제공합니다.",
    currencyConverterPrecision: "정밀도",
    currencyConverterCopyToClipboard: "Enter를 눌러 계산 결과를 클립보드에 복사",

    workflows: "워크플로우",
    workflowSettingsDescription: "이 플러그인을 사용하면 여러 작업을 한 번에 빠르게 실행할 수 있습니다.",
    workflowSettingsAddWorkflow: "워크플로우 추가",
    workflowName: "이름",
    workflowNamePlaceholder: "워크플로우의 이름을 작성하세요",
    workflowDescription: "설명",
    workflowDescriptionPlaceholder: "워크플로우의 설명을 작성하세요",
    workflowTags: "태그",
    workflowIcon: "아이콘",
    workflowExecutionSteps: "실행 순서",
    workflowExecutionArgumentType: "실행 인자 유형",
    workflowExecutionArgumentTypeCommandlineTool: "명령줄 도구",
    workflowExecutionArgumentTypeUrl: "URL",
    workflowInvalidExecutionStep: "올바르지 않은 실행 순서",
    workflowInvalidWorkflow: "올바르지 않은 워크플로우",
    workflowNeedsUserConfirmationBeforeExecution: "실행 전 확인 필요",

    commandline: "명령줄",
    commandlinePrefix: "접두어",
    commandlineSettingsDescription: "이 플러그인을 사용하면 명령줄 명령을 빠르게 실행할 수 있습니다.",
    commandlineShell: "쉘 (Shell)",

    simpleFolderSearch: "단순 폴더 검색",
    simpleFolderSearchDescription: "이 플러그인을 사용하면 파일 또는 폴더를 빠르게 검색할 수 있습니다.",
    simpleFolderSearchRecursive: "폴더 검색 반복",
    simpleFolderSearchExcludeHiddenFiles: "숨겨진 파일 제외",
    simpleFolderSearchFolderPath: "폴더 경로",
    simpleFolderSearchAddFolder: "폴더 추가",
    simpleFolderSearchEditFolder: "폴더 수정",

    uwpSettingsDescription: "이 플러그인을 사용하면 미리 설치된 UWP 앱을 찾을 수 있습니다.",

    colorConverter: "색상 변환기",
    colorConverterDescription: "이 플러그인을 사용하면 색을 다른 형식으로 빠르게 변환할 수 있습니다.",
    colorConverterShowColorPreview: "색상 미리보기 표시",

    dictionary: "사전",
    dictionaryDescription:
        "이 플러그인은 단어의 정의와 동의어를 빠르게 검색할 수 있게 해줍니다. 비공식 구글 사전 API (https://dictionaryapi.dev/)를 사용합니다.",
    dictionaryPrefix: "접두어",
    dictionaryMinSearchTermLength: "검색어 최소 길이",
    dictionaryDebounceDelay: "디바운스 지연 시간 (밀리 초 단위)",

    browserBookmarks: "북마크 검색",
    browserBookmarksDescription: "이 플러그인을 사용하면 브라우저 북마크를 검색할 수 있습니다.",
    browserBookmarksBrowser: "브라우저",
    browserBookmarksUseFavicons: "패비콘 사용",
    browserBookmark: "북마크",

    cancel: "취소",
    save: "저장",
    add: "추가",
    remove: "삭제",
    edit: "수정",
    forExample: "예시",
    example: "예제",
    iconType: "아이콘 종류",
    iconTypeColor: "색상",
    showFullFilePath: "전체 파일 경로 표시",
    yes: "네",
    no: "아니오",
    resetToDefault: "기본으로 되돌립니까?",
    resetPluginSettingsToDefaultWarning: "이 플러그인의 모든 설정을 기본값으로 재설정하려고 합니다. 계속하시겠습니까?",
    filePath: "파일 경로",
    folderPath: "폴더 경로",
    chooseFile: "파일 선택",
    chooseFolder: "폴더 선택",
    restartRequired: "재시작 필요함",

    controlPanel: "제어판",
    controlPanelSettingsDescription: "이 플러그인을 사용하면 제어판 항목을 빠르게 찾을 수 있습니다.",

    weather: "날씨",
    weatherPrefix: "접두사",
    weatherSettingsDescription:
        "이 플러그인은 모든 지역의 날씨 상태를 확인할 수 있습니다. 지역이 제공되지 않으면 기본값으로 현재 위치의 날씨를 표시합니다. 데이터는 wttr.in 의해 제공됩니다.",
    weatherTemperatureUnit: "온도 단위",
    weatherCopyToClipboard: "Enter를 눌러 계산 결과를 클립보드에 복사",

    loremIpsum: "Lorem Ipsum",
    loremIpsumPrefix: "접두사",
    loremIpsumCopyToClipboard: "Enter를 눌러 계산 결과를 클립보드에 복사",
    loremIpsumSettingsDescription: "이 플러그인을 사용하면 클립보드에 샘플 텍스트를 빠르게 복사할 수 있습니다.",
};
