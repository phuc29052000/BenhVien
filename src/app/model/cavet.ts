import { Asset } from './asset';
import { AssetCavet } from './asset-cavet';
import { AssignRM } from './assign-rm';
import { Note } from './note';
import { ServiceAddresses } from './service-addresses';

export class Cavet {
  id!: number;
  code!: string;
  customerCode!: string;
  customerName!: string;
  customerPhone!: string;
  customerType!: string;
  customerEmail!: string;
  assetOwner!: string;
  assetOwnerPhone!: string;
  rmName!: string;
  rmPhone!: string;
  optionCode!: string;
  optionT24Code!: string;
  branchCode!: string;
  branchName!: string;
  currentUserId!: number;
  currentGroupId!: number;
  parentId!: number;
  finishPrintingTime!: string;
  locationVehicleRegistration!: number;
  timeVehicleRegistration!: string;
  status!: string;
  timeAssign!: string;
  timeConfirmCustomer!: string;
  assignTimes!: number;
  branchVehicleRegistrationId!: number;
  isAssigned!: boolean;
  latitude!: number;
  longtitude!: number;
  assignRM!: AssignRM;
  assets!: AssetCavet[];
  note!: Note;
  serviceAddresses!: ServiceAddresses;
}
