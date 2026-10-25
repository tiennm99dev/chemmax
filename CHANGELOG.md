# Changelog

All notable changes to **ChemMax** are documented here. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Versioning: 4-digit MAJOR.MINOR.PATCH.MICRO.

## [Unreleased]

## [0.0.1.0] - 2026-10-25

### Added

- Site Hoá học lớp 6-12 theo KNTT, dựng trên phần lõi đồng bộ từ MathMax: trang chọn lớp, hub lớp, chương, mạch kiến thức và trang "Sắp ra mắt" cho 163 bài trong 47 chương.
- Chương trình học `lop-6.json` … `lop-12.json` nhập từ manifest Hoá học (KHTN 6-9 mạch Hoá học, Hoá học 10-12 và Chuyên đề học tập).
- Thành phần Hoá học trong `src/lib/domain/`: `periodic-table` (đủ 118 nguyên tố), `atom-model`, `molecule-viewer`, `equation-balancer`, `ph-scale`, `lab-glassware`, mỗi thành phần có engine thuần kèm test và demo ở `/_gallery/`.
- Bài mẫu Lớp 10 — Bài 1. Thành phần của nguyên tử: phóng to vào nguyên tử đúng tỉ lệ và lắp nguyên tử từ proton, neutron, electron.
- Apache-2.0 LICENSE, README, RUNBOOK; CI và deploy GitHub Pages từ `main`.
