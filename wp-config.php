<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'u74997_wordpressredfelt' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'u74997_redfelt' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'punkgrief1488' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'VRGtZ6UeW>qs*F~V0k}:4F7={h?)xTa%.@]F<&wWn0HFu%[2rDsvW[#9Lq-jo&ak' );
define( 'SECURE_AUTH_KEY',  'Q0#t3dWgo}BjH~hA)$*]Wm,lC)y0,%7_^CBM=Hs+iQg6E11,DmJP8P]*h~@[;)6A' );
define( 'LOGGED_IN_KEY',    'Gr H]>%:h0mj*/S28uF)aN&.H,e1K><Ol;_yM0_u<S_A+hWI/$`U_AY^+qkU47({' );
define( 'NONCE_KEY',        '>fLD.;{Y0n19k6) E)u=W(XVeNitz5:[QJAs%%Za8 32;hZ$rTcj3rP$sir|_3ov' );
define( 'AUTH_SALT',        'c-~}#]SPH+[g>rU;`#809R5jw,R/=L-t<!FR>;t0Evw `}l*k:HW5l{DL<Jw@SrY' );
define( 'SECURE_AUTH_SALT', '2q@Qo6+qJe:~YTEBk(Q;KNtxl{{0M<IVNoY=HU.&FJk~bg(}/BC%aBT`)NQjmE4V' );
define( 'LOGGED_IN_SALT',   'L;lC|8544Z-Ljz2B&g|XXiuVSy&Y^Amh}(iXa^&6aj1}zk5L;!>jU;`_szgfGiy2' );
define( 'NONCE_SALT',       'PmZ:#qD1=3 zkSWIPK#UI;KhQ[Dl7HKb3FF7sz#oz,3_TIyaB_)[FFI`mQ`pOInd' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );
