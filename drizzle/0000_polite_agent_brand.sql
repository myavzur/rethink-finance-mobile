CREATE TABLE `categories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`icon_name` text NOT NULL,
	`highlight_color` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `category_name` ON `categories` (`name`);--> statement-breakpoint
CREATE TABLE `transactions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer DEFAULT (unixepoch('subsec') * 1000) NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`type` integer NOT NULL,
	`amount_value` integer NOT NULL,
	`amount_currency` text NOT NULL,
	`category_id` integer NOT NULL,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE no action
);
