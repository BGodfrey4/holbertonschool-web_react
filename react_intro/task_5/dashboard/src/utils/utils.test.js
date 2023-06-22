// import React from "react";
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

// test to check getFullYear returns correct year
test('get the Full Year returns correct year', () => {
  expect(getFullYear()).toBe(2023);
});

test('get the footer if false', () => {
  expect(getFooterCopy()).toBe('Holberton School main dashboard');
});

test('get the footer if true', () => {
	expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getLatestNotification', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});
