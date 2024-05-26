import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_blue_plus/flutter_blue_plus.dart';
import '/backend/schema/structs/index.dart';

Future<List<BTDeviceStruct>> bleFindDevices() async {
  List<BTDeviceStruct> devices = [];
  StreamSubscription<List<ScanResult>>? scanSubscription;

  try {
    if ((await FlutterBluePlus.isSupported) == false) return devices;

    // Listen to scan results
    scanSubscription = FlutterBluePlus.scanResults.listen(
      (results) {
        List<ScanResult> scannedDevices = results.where((r) => r.device.platformName.isNotEmpty).toList();
        scannedDevices.sort((a, b) => b.rssi.compareTo(a.rssi));

        devices = scannedDevices.map((deviceResult) {
          return BTDeviceStruct(
            name: deviceResult.device.platformName,
            id: deviceResult.device.remoteId.str,
            rssi: deviceResult.rssi,
          );
        }).toList();
      },
      onError: (e) {
        debugPrint('bleFindDevices error: $e');
      },
    );

    // Start scanning if not already scanning
    if (!FlutterBluePlus.isScanningNow) {
      await FlutterBluePlus.startScan(
        timeout: const Duration(seconds: 5),
        withServices: [], // Add specific service UUIDs if needed
      );
    }
  } finally {
    // Cancel subscription to avoid memory leaks
    await scanSubscription?.cancel();
  }

  return devices;
}