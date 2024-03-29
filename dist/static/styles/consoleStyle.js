"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inspectorTheme = void 0;
exports.inspectorTheme = {
    PADDING: '0.4rem 1.5rem 0.4rem 0px',
    LOG_ICON: '',
    LOG_BORDER: '#191C1D',
    LOG_ICON_HEIGHT: '26px',
    LOG_ICON_WIDTH: '1em',
    // tslint:disable-next-line:max-line-length
    LOG_COMMAND_ICON: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(255, 255, 255, 0.8)' viewBox='0 0 40 40'%3e%3cpath d='M16.6 10l10 10-10 10-2.3-2.3L22 20l-7.7-7.7z'/%3e%3c/svg%3e")`,
    LOG_WARN_COLOR: 'rgb(245, 211, 150)',
    LOG_WARN_BACKGROUND: '#332A00',
    LOG_WARN_BORDER: '#665500',
    // tslint:disable-next-line:max-line-length
    LOG_WARN_ICON: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23F5D396' viewBox='0 0 40 40'%3e%3cpath d='M21.6 23.4v-6.8h-3.2v6.8h3.2zm0 6.6v-3.4h-3.2V30h3.2zm-20 5L20 3.4 38.4 35H1.6z'/%3e%3c/svg%3e")`,
    BASE_FONT_FAMILY: 'Fira Mono, monospace',
    BASE_FONT_SIZE: '14px',
    BASE_LINE_HEIGHT: '18px',
    BASE_BACKGROUND_COLOR: 'rgba(0, 0, 0, 0)',
    BASE_COLOR: 'rgb(213, 213, 213)',
    OBJECT_NAME_COLOR: 'rgb(255,255,255)',
    OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
    OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
    OBJECT_VALUE_REGEXP_COLOR: '#fac863',
    OBJECT_VALUE_STRING_COLOR: '#fac863',
    OBJECT_VALUE_SYMBOL_COLOR: '#fac863',
    OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
    OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
    OBJECT_VALUE_FUNCTION_KEYWORD_COLOR: 'rgb(242, 85, 217)',
    HTML_TAG_COLOR: 'rgb(93, 176, 215)',
    HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
    HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
    HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
    HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
    HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
    HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
    ARROW_COLOR: 'rgb(145, 145, 145)',
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 11,
    TREENODE_FONT_FAMILY: 'Menlo, monospace',
    TREENODE_FONT_SIZE: '13px',
    TREENODE_LINE_HEIGHT: '16px',
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
    TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
    TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
    TABLE_SORT_ICON_COLOR: 'black',
    TABLE_DATA_BACKGROUND_IMAGE: 
    // tslint:disable-next-line:max-line-length
    'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
    TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZVN0eWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3N0YXRpYy9zdHlsZXMvY29uc29sZVN0eWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBYSxRQUFBLGNBQWMsR0FBRztJQUMxQixPQUFPLEVBQUUsMEJBQTBCO0lBRW5DLFFBQVEsRUFBRSxFQUFFO0lBQ1osVUFBVSxFQUFFLFNBQVM7SUFDckIsZUFBZSxFQUFFLE1BQU07SUFDdkIsY0FBYyxFQUFFLEtBQUs7SUFDckIsMkNBQTJDO0lBQzNDLGdCQUFnQixFQUFFLGdOQUFnTjtJQUVsTyxjQUFjLEVBQUUsb0JBQW9CO0lBQ3BDLG1CQUFtQixFQUFFLFNBQVM7SUFDOUIsZUFBZSxFQUFFLFNBQVM7SUFDMUIsMkNBQTJDO0lBQzNDLGFBQWEsRUFBRSxvT0FBb087SUFFblAsZ0JBQWdCLEVBQUUsc0JBQXNCO0lBQ3hDLGNBQWMsRUFBRSxNQUFNO0lBQ3RCLGdCQUFnQixFQUFFLE1BQU07SUFFeEIscUJBQXFCLEVBQUUsa0JBQWtCO0lBQ3pDLFVBQVUsRUFBRSxvQkFBb0I7SUFFaEMsaUJBQWlCLEVBQUUsa0JBQWtCO0lBQ3JDLHVCQUF1QixFQUFFLG9CQUFvQjtJQUM3Qyw0QkFBNEIsRUFBRSxvQkFBb0I7SUFDbEQseUJBQXlCLEVBQUUsU0FBUztJQUNwQyx5QkFBeUIsRUFBRSxTQUFTO0lBQ3BDLHlCQUF5QixFQUFFLFNBQVM7SUFDcEMseUJBQXlCLEVBQUUscUJBQXFCO0lBQ2hELDBCQUEwQixFQUFFLHFCQUFxQjtJQUNqRCxtQ0FBbUMsRUFBRSxtQkFBbUI7SUFFeEQsY0FBYyxFQUFFLG1CQUFtQjtJQUNuQyxrQkFBa0IsRUFBRSxtQkFBbUI7SUFDdkMsMkJBQTJCLEVBQUUsV0FBVztJQUN4Qyx5QkFBeUIsRUFBRSxvQkFBb0I7SUFDL0MsMEJBQTBCLEVBQUUsb0JBQW9CO0lBQ2hELGtCQUFrQixFQUFFLG9CQUFvQjtJQUN4QyxrQkFBa0IsRUFBRSxvQkFBb0I7SUFFeEMsV0FBVyxFQUFFLG9CQUFvQjtJQUNqQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCLGVBQWUsRUFBRSxFQUFFO0lBRW5CLG9CQUFvQixFQUFFLGtCQUFrQjtJQUN4QyxrQkFBa0IsRUFBRSxNQUFNO0lBQzFCLG9CQUFvQixFQUFFLE1BQU07SUFDNUIscUJBQXFCLEVBQUUsRUFBRTtJQUV6QixrQkFBa0IsRUFBRSxpQkFBaUI7SUFDckMseUJBQXlCLEVBQUUsaUJBQWlCO0lBQzVDLG9CQUFvQixFQUFFLGlCQUFpQjtJQUN2QyxxQkFBcUIsRUFBRSxPQUFPO0lBQzlCLDJCQUEyQjtJQUMzQiwyQ0FBMkM7SUFDekMsdUlBQXVJO0lBQ3pJLDBCQUEwQixFQUFFLFlBQVk7Q0FDekMsQ0FBQyJ9